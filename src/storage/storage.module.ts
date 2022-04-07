import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Storage, StorageSchema } from './entities/storage.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Storage.name, schema: StorageSchema }])],
  controllers: [StorageController],
  providers: [StorageService]
})
export class StorageModule {}
