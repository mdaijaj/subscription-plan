import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'aijaj123',
      database: 'demo',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    SubscriptionModule,
  ],
})

export class AppModule {}
