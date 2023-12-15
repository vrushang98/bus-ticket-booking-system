import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { BusService } from './bus.service';
import { FindBusesInput } from './dto/find-buses.dto';
import { successResponse } from 'src/common/utils/helpers/success';
import { AddNewBusDTO } from './dto/add-new-bus.dto';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Get('/details')
  async getBusDetails(@Query() query: FindBusesInput) {
    const response = await this.busService.getBusDetails(query);

    return successResponse(response);
  }

  @Post('/add-new')
  async addNewBus(@Body() dto: AddNewBusDTO) {
    const response = await this.busService.addNewBus(dto);

    return successResponse(response, HttpStatus.CREATED);
  }
}
