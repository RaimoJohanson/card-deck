import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { FrenchCardsModule } from './french-cards/french-cards.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    FrenchCardsModule,
  ],
})
export class AppModule {}
