import { IsDateString, IsNotEmpty } from "class-validator";

export class ReportDto {
  @IsNotEmpty()
  @IsDateString()
  startDate: Date;
  @IsNotEmpty()
  @IsDateString()
  endDate: Date;
  search: string;
  page: string;
  limit: string;
}