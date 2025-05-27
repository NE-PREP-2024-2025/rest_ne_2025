import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";



export class RegisterParkingLotDto {
  @IsNotEmpty()
  @IsString()
  parkingName: string
  @IsNotEmpty()
  @IsString()
  location: string
  @IsNotEmpty()
  @IsNumber()
  numberOfAvailableSpace: number
  @IsNotEmpty()
  @IsNumber()
  feesPerHour: number
 }


 export class UpdateParkingLotDto {

  @IsString()
  parkingName: string
   @IsString()

  location: string

  @IsNumber()
  numberOfAvailableSpace: number

  @IsNumber()
  feesPerHour: number
 }