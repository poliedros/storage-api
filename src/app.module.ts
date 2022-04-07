import { Module } from '@nestjs/common';
/* import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import { StorageModule } from './storage/storage.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://amendes:EoyOR1Wxi9penzYH@cluster0.59uij.mongodb.net/test'), StorageModule],
  controllers: [/* AppController */],
  providers: [/* AppService */],
})
export class AppModule {}