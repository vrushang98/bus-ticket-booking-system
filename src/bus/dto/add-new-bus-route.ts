import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class AddNewBusRouteDTO {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  routeName: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  departurePlace: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  arrivalPlace: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  departureTime: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  arrivalTime: string;

  @IsNumber()
  @IsDefined()
  @Min(0)
  price: number;
}
