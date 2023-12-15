import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusEntity } from './entities/bus.entity';
import { BusRoutesEntity } from './entities/bus-routes.entity';

@Module({
  controllers: [BusController],
  imports: [TypeOrmModule.forFeature([BusEntity, BusRoutesEntity])],
  providers: [BusService],
})
export class BusModule {}
