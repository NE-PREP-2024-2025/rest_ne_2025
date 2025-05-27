import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
export class ReportController {
  public static async generateCarExitReportBetweenTwoDateTime(req: Request, res: Response, next: NextFunction) {
    try {
      const { startDate, endDate, search, page, limit } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;
      if(!startDate || !endDate){
        ServerResponse.error(res, "Start date and end date are required")
        return
      }
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
      const lastDate=new Date(endDate as string).setHours(23, 59, 59, 999)
      const tickets = await prisma.parkingTicket.findMany({
        where: {
          exit_date: {
            gte: new Date(startDate as string),
            lte: new Date(lastDate),
          },
          ...filters,
        },
        skip,
        take: limitNumber,
      })
      const total=await prisma.parkingTicket.count({
        where: {
          exit_date: {
            gte: new Date(startDate as string),
            lte: new Date(lastDate),
          },
          ...filters,
        },
      })
      ServerResponse.successWithPagination(res, "Parking Tickets fetched successfully", tickets,total,pageNumber,limitNumber)
    } catch (error) {
      next(error)
    }
  }
  public static async generateCarEntryReportBetweenTwoDateTime(req: Request, res: Response, next: NextFunction) {
    try {
      const { startDate, endDate, search, page, limit } = req.query;
      if(!startDate || !endDate){
        ServerResponse.error(res, "Start date and end date are required")
        return
      }
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
      const lastDate=new Date(endDate as string).setHours(23, 59, 59, 999)
      const tickets = await prisma.parkingTicket.findMany({
        where: {
          entry_date: {
            gte: new Date(startDate as string),
            lte: new Date(lastDate),
          },
          ...filters,
        },
        skip,
        take: limitNumber,
        include: {
          parkingLot: true,
        }
      })
      const total=await prisma.parkingTicket.count({
        where: {
          entry_date: {
            gte: new Date(startDate as string),
            lte: new Date(lastDate),
          },
          ...filters,
        },
      })
      ServerResponse.successWithPagination(res, "Parking Tickets fetched successfully", tickets,total,pageNumber,limitNumber)
    } catch (error) {
      next(error)
    }
  }
      

}
