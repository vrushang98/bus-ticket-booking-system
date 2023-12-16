import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusEntity } from './entities/bus.entity';
import { Repository } from 'typeorm';
import { FindBusesInput } from './dto/find-buses.dto';
import { AddNewBusDTO } from './dto/add-new-bus.dto';
import { AddNewBusRouteDTO } from './dto/add-new-bus-route';
import { BusRoutesEntity } from './entities/bus-routes.entity';

@Injectable()
export class BusService {
  constructor(
    @InjectRepository(BusEntity)
    private readonly busRepository: Repository<BusEntity>,
    @InjectRepository(BusRoutesEntity)
    private readonly busRoutesRepository: Repository<BusRoutesEntity>,
  ) {}

  async getBusDetails(query: FindBusesInput) {
    try {
      const { limit = 7, skip = 0 } = query;

      return this.busRepository.find({
        take: limit,
        skip,
        relations: {
          busRoutes: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async addNewBus(dto: AddNewBusDTO) {
    try {
      const createBus = await this.busRepository.create(dto);

      return this.busRepository.save(createBus);
    } catch (error) {
      throw error;
    }
  }

  async addNewBusRoute(dto: AddNewBusRouteDTO, busId: string) {
    try {
      const _bus = await this.busRepository.findOne({
        where: { id: busId },
        select: { id: true },
      });

      if (!_bus) {
        throw new BadRequestException('Invalid Bus ID');
      }

      const createBus = await this.busRoutesRepository.create({
        ...dto,
        bus: { id: _bus?.id },
      });

      return this.busRoutesRepository.save(createBus);
    } catch (error) {
      throw error;
    }
  }
}
