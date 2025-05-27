import { IsNotEmpty, IsString,Matches } from "class-validator";


export class ParkingDto{
  @IsNotEmpty()
  @IsString()
  @Matches(/^[Rr][Aa]{2}[0-9]{3}[A-Za-z]$/,{message:"Invalid plate number"})
  plateNumber: string
  @IsNotEmpty()
  @IsString()
  @Matches(/^PARK[0-9]{3}$/,{message:"Invalid parking code"})
  parkingCode: string
}