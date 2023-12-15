import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusEntity } from './entities/bus.entity';
import { Repository } from 'typeorm';
import { FindBusesInput } from './dto/find-buses.dto';
import { AddNewBusDTO } from './dto/add-new-bus.dto';

@Injectable()
export class BusService {
  constructor(
    @InjectRepository(BusEntity)
    private readonly busRepository: Repository<BusEntity>,
  ) {}

  async getBusDetails(query: FindBusesInput) {
    try {
      const { limit = 7, skip = 0 } = query;

      return this.busRepository.find({
        take: limit,
        skip,
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
}
