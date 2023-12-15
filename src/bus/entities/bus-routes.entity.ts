import { BaseColumnsEntity } from 'src/common/entities/base.entity';
import { Column, JoinColumn, ManyToOne } from 'typeorm';
import { BusEntity } from './bus.entity';

export class BusRoutesEntity extends BaseColumnsEntity {
  @Column()
  routeName: string;

  @Column()
  departurePlace: string;

  @Column()
  arrivalPlace: string;

  @Column({ type: 'timestamp' })
  departureTime: Date;

  @Column({ type: 'timestamp' })
  arrivalTime: Date;

  @ManyToOne(() => BusEntity, (bus) => bus.busRoutes)
  @JoinColumn()
  bus: BusEntity;

  @Column({ type: 'float', default: 0 })
  price: number;
}
