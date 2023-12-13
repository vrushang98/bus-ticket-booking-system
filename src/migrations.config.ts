import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  username: configService.get('DB_USER', 'postgres'),
  password: configService.get('DB_PASS', 'password'),
  port: configService.get('DB_PORT', 5432),
  host: configService.get('DB_HOST', '127.0.0.1'),
  database: configService.get('DB_INSTANCE', 'public'),
  synchronize: false,
  schema: configService.get('DB_SCHEMA', 'public'),
  entities: [join(__dirname, '**/**.entity{.ts,.js}')],
  namingStrategy: new SnakeNamingStrategy(),
  migrations: [join(__dirname, '**/migrations/*{.ts,.js}')],
});
