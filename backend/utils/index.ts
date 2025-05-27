
import prisma from "../prisma/prisma-client";
export class ParkingLotUtility {
  public static async generateParkCode() {
    const lastSlotNumber = await prisma.parkingLot.findFirst({
      orderBy: {
        code: "desc",
      },
    });

    const lastSlotNumberInt = lastSlotNumber?.code || "PARK000";
    const newSlotNumber = `PARK${(parseInt(lastSlotNumberInt.slice(4)) + 1)
      .toString()
      .padStart(3, "0")}`;

    return newSlotNumber;
  }

}



