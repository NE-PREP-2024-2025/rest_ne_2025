import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import { ParkingLotUtility } from "../utils";

export class ParkingLotController {
  public static async createParkingLot(req: Request, res: Response, next: NextFunction) {
    try {
      const { parkingName,numberOfAvailableSpace,location,feesPerHour } = req.body;
      const parkingLot = await prisma.parkingLot.create({
        data: {
    
          parkingName,
          numberOfAvailableSpace,
          location,
          feesPerHour,
          code: await ParkingLotUtility.generateParkCode()
        }
      })
      ServerResponse.success(res, "Parking Lot created successfully", parkingLot)
    } catch (error) {
      next(error)
    }

  }

  public static async getParkingLots(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search } = req.query;
  
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;
  
      const filters: any = {};
  
      if (search) {
        filters.OR = [
          {
            parkingName: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
          {
            code: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
          {
            location: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
        ];
      }
    
      const [parks, total] = await Promise.all([
        prisma.parkingLot.findMany({
          where: filters,
          skip,
          take: limitNumber,
          orderBy: {
            code: "asc",
          },
        }),
        prisma.parkingLot.count({
          where: filters,
        }),
      ]);
  
      
      ServerResponse.successWithPagination(res, "Slots fetched successfully", parks, total, pageNumber, limitNumber)
    } catch (error) {
      next(error);
    }
  }

  public static async getParkingLotByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { code } = req.params;
      const   parkingLot = await prisma.parkingLot.findUnique({
        where: { code },
      });
        
      if (!parkingLot) {
        ServerResponse.notFound(res, "Parking Lot not found")
        return
      }
      ServerResponse.success(res, "Parking Lot fetched successfully", parkingLot)
    } catch (error) {
      next(error)
    }
  }

  public static async updateParkingLot(req: Request, res: Response, next: NextFunction) {
    try {
      const { code } = req.params;
      const { parkingName,numberOfAvailableSpace,location,feesPerHour } = req.body;
      const parkingLot = await prisma.parkingLot.update({
        where: { code },
        data: { parkingName,numberOfAvailableSpace,location,feesPerHour }
      });
      ServerResponse.success(res, "Parking Lot updated successfully", parkingLot)
    } catch (error) {
      next(error)
    }
  }
  public static async deleteParkingLot(req: Request, res: Response, next: NextFunction) {
    try {
      const { code } = req.params;
      await prisma.parkingLot.delete({
        where: { code },
      });
      ServerResponse.success(res, "Parking Lot deleted successfully")
    } catch (error) {
      next(error)
    }
  }
}