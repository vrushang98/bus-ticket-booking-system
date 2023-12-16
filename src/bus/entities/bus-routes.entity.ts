import { BaseColumnsEntity } from 'src/common/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BusEntity } from './bus.entity';

@Entity()
export class BusRoutesEntity extends BaseColumnsEntity {
  @Column()
  routeName: string;

  @Column()
  departurePlace: string;

  @Column()
  arrivalPlace: string;

  @Column({ type: 'time' })
  departureTime: Date;

  @Column({ type: 'time' })
  arrivalTime: Date;

  @ManyToOne(() => BusEntity, (bus) => bus.busRoutes)
  @JoinColumn()
  bus: BusEntity;

  @Column({ type: 'float', default: 0 })
  price: number;
}
