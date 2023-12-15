import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseColumnsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
