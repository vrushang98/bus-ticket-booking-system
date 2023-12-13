import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const ormConfig: (
  configService: ConfigService,
) => TypeOrmModuleOptions = (configService) => ({
  type: 'postgres',
  username: configService.get('DB_USER', 'postgres'),
  password: configService.get('DB_PASS', 'password'),
  port: configService.get('DB_PORT', 5432),
  host: configService.get('DB_HOST', '127.0.0.1'),
  database: configService.get('DB_INSTANCE', 'bus-tickets-dev'),
  synchronize: configService.get('DB_SYNC', 'true') === 'true',
  schema: configService.get('DB_SCHEMA', 'public'),
  bigNumberStrings: false,
  entities: [join(__dirname, '**/**.entity{.ts,.js}')],
  migrations: [join(__dirname, '**/migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
});
