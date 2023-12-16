import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BusService } from './bus.service';
import { FindBusesInput } from './dto/find-buses.dto';
import { successResponse } from 'src/common/utils/helpers/success';
import { AddNewBusDTO } from './dto/add-new-bus.dto';
import { AddNewBusRouteDTO } from './dto/add-new-bus-route';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Get('/details')
  async getBusDetails(@Query() query: FindBusesInput) {
    const response = await this.busService.getBusDetails(query);

    return successResponse(response);
  }

  @Post('/add-bus')
  async addNewBus(@Body() dto: AddNewBusDTO) {
    const response = await this.busService.addNewBus(dto);

    return successResponse(response, HttpStatus.CREATED, 'Bus Added');
  }

  @Post('/add-route/:busId')
  async addNewBusRoute(
    @Param('busId') busId: string,
    @Body() dto: AddNewBusRouteDTO,
  ) {
    const response = await this.busService.addNewBusRoute(dto, busId);

    return successResponse(response, HttpStatus.CREATED, 'Bus Route Added');
  }
}
