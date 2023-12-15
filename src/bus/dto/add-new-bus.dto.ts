import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class AddNewBusDTO {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  busName: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  driverName: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  driverPhone: string;

  @IsNumber()
  @Min(10)
  @Max(40)
  totalSeats: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  seatPrefix: string;
}
