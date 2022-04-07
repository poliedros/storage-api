import { Module } from '@nestjs/common';
/* import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import { StorageModule } from './storage/storage.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://amendes:EoyOR1Wxi9penzYH@cluster0.59uij.mongodb.net/test'), StorageModule, ItemsModule],
  controllers: [/* AppController */],
  providers: [/* AppService */],
})
export class AppModule {}