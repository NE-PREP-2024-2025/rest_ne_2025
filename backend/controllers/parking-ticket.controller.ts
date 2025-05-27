import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import sendMail from "../utils/emailUtility";
export class ParkingTicketController {
  public static async createParkingTicket(req: Request, res: Response, next: NextFunction) {
    try {
      const {plateNumber,parkingCode} = req.body;
      const parkingLot = await prisma.parkingLot.findUnique({
        where: { code: parkingCode },
      });
      if (!parkingLot) {
        ServerResponse.notFound(res, "Parking Lot not found")
        return
      }
      if (parkingLot.numberOfAvailableSpace == 0) {
        ServerResponse.error(res,"No available space in parking")
      }

      else {

        // find the parking slot and reduce the available space
        const parkingLot = await prisma.parkingLot.findFirst({
          where: {
            code: parkingCode,
          },
        });
        // find parking lot ticker
        const parkingTicket = await prisma.parkingTicket.findFirst({
          where: {
            plateNumber
          }
        })
        if (parkingTicket?.exit_date) {
          ServerResponse.error(res, "You have already parked your car")
          return
        }
        if (!parkingLot) {
          ServerResponse.notFound(res, "No parking lot found")
          return
        }
        else {
          await prisma.parkingLot.update({
            where: { code: parkingCode },
            data: {
              numberOfAvailableSpace: parkingLot.numberOfAvailableSpace - 1,
            },
          })
        }
        const user=await prisma.user.findUnique({
          where: { id: req.user.id },
        })
        // Generate the ticket
        const ticket = await prisma.parkingTicket.create({
          data: {
            plateNumber,
            parking_code: parkingLot.code,
            entry_date: new Date(),
            exit_date: null,
            amount: 0,
            userId: req.user.id,
          },
        })
        await sendMail({
          ticketNumber:ticket.id,
          firstName: user?.firstName,
          lastName:user?.lastName,
          plateNumber,
          parkingCode,
          entryDate:ticket.entry_date,
          rate: parkingLot.feesPerHour,
          currentYear:new Date().getFullYear(),
        },user?.email as string,"Parking Ticket created successfully","carEntryTemplate")
        ServerResponse.success(res, "Parking Ticket created successfully", ticket)
      }
    } catch (error) {
      next(error)
    }
  }
  public static async getParkingTickets(req: Request, res: Response, next: NextFunction) {  
    const { page, limit, search } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = parseInt(limit as string) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    let filters:any={}
    if(search){
      filters.OR = [
        {
          parking_code: {
            contains: search.toString().trim(),
            mode: "insensitive",
          },
        },
        {
          plateNumber: {
            contains: search.toString().trim(),
            mode: "insensitive",
          },
        },
      ];
    }
    try {
      const tickets = await prisma.parkingTicket.findMany({
        where: {
          userId: req.user.id,
          ...filters,
        },
        skip:skip,
        take:limitNumber,
      })
      const total=await prisma.parkingTicket.count({
        where: {
          userId: req.user.id,
          ...filters,
        },
      })
      ServerResponse.successWithPagination(res, "Parking Tickets fetched successfully", tickets,total,pageNumber,limitNumber)
    } catch (error) {
      next(error)
    }
  }
  public static async getParkingTicketByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;
      let filters:any={}
      if(search){
        filters.OR = [
          {
            parking_code: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
          {
            plateNumber: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
        ];
      }
      const { code } = req.params;
      if(!code){
        ServerResponse.error(res, "No parking code provided")
        return
      }
      const ticket = await prisma.parkingTicket.findMany({
        where: { parking_code: code },
        skip:skip,
        take:limitNumber,
      })
      const total=await prisma.parkingTicket.count({
        where: { parking_code: code },
      })
      ServerResponse.successWithPagination(res, "Parking Ticket fetched successfully", ticket,total,pageNumber,limitNumber)
    } catch (error) {
      next(error)
    }
  }
  public static async generateBill(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if(!id){
        ServerResponse.error(res, "Please provide ticket id")
        return
      }
      // find ticket and its associated parking lot to increase the available space
      const ticket = await prisma.parkingTicket.findUnique({
        where: { id },
      })
      if (!ticket) {
        ServerResponse.notFound(res, "Parking Ticket not found")
        return
      }
      // if ticket was already billed
      if(ticket.exit_date){
        ServerResponse.error(res, "Ticket already billed")
        return
      }
      const parkingLot = await prisma.parkingLot.findUnique({
        where: { code: ticket.parking_code },
      })
      if (!parkingLot) {
        ServerResponse.notFound(res, "Parking Lot not found")
        return
      }
      const updatedTicket = await prisma.parkingTicket.update({
        where: { id },
        data: {
          exit_date: new Date(),
          amount: parkingLot.feesPerHour * Math.max(1,(new Date().getHours() - ticket.entry_date.getHours())),
        },
      })
      await prisma.parkingLot.update({
        where: { code: ticket.parking_code },
        data: {
          numberOfAvailableSpace: parkingLot.numberOfAvailableSpace + 1,
        },
      })
      const user=await prisma.user.findUnique({
        where:{id:ticket.userId}
      })
      // send bill email
      await sendMail({
        customerName:user?.firstName+ " " + user?.lastName,
        customerEmail:user?.email,
        licencePlate:updatedTicket.plateNumber,
        entryTime:updatedTicket.entry_date,
        exitTime:updatedTicket.exit_date,
        totalHours:Math.max(1,(new Date().getHours() - updatedTicket.entry_date.getHours())),
        ratePerHour:parkingLot.feesPerHour,
        subtotal:parkingLot.feesPerHour * Math.max(1,(new Date().getHours() - updatedTicket.entry_date.getHours())),
        
      },user?.email as string,"Parking Ticket generated successfully","billingTemplate")
      ServerResponse.success(res, "Parking Ticket generated successfully", updatedTicket)
    } catch (error) {
      next(error)
    }
  }
  public static async getAllParkingTickets(req: Request, res: Response, next: NextFunction) {
    const { page, limit, search } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;
  
    const filters: any = {};
    if (search) {
      filters.OR = [
        {
          parking_code: {
            contains: search.toString().trim(),
            mode: "insensitive",
          },
        },
        {
          plateNumber: {
            contains: search.toString().trim(),
            mode: "insensitive",
          },
        },
      ];
    }
    try {
      const tickets = await prisma.parkingTicket.findMany({
        where: filters,
        skip,
        take: limitNumber,
      })
      ServerResponse.success(res, "Parking Tickets fetched successfully", tickets)
    } catch (error) {
      next(error)
    }
  }

  public static async deleteTicket(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if(!id){
        ServerResponse.error(res, "Please provide ticket id")
        return
      }
      const ticket = await prisma.parkingTicket.delete({
        where: { id },
      })
      ServerResponse.success(res, "Parking Ticket deleted successfully", ticket)
    } catch (error) {
      next(error)
    }
  }
}
