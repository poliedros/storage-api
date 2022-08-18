import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    StorageModule,
    ItemsModule,
  ],
})
export class AppModule {}
