import { BaseColumnsEntity } from 'src/common/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BusRoutesEntity } from './bus-routes.entity';

@Entity()
export class BusEntity extends BaseColumnsEntity {
  @Column()
  busName: string;

  @Column()
  driverName: string;

  @Column()
  driverPhone: string;

  @Column({ type: 'int', default: 40 })
  totalSeats: number;

  @Column({ type: 'int', default: 40 })
  availableSeats: number;

  @Column({ default: 'S' })
  seatPrefix: string;

  @OneToMany(() => BusRoutesEntity, (route) => route.bus)
  busRoutes: BusRoutesEntity[];
}
