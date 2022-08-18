import { Controller, Body, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @EventPattern({ storage: 'create' })
  create(@Body() createStorageDto: CreateStorageDto) {
    return this.storageService.create(createStorageDto);
  }

  @MessagePattern({ storage: 'findall' })
  findAll() {
    return this.storageService.findAll();
  }

  @MessagePattern({ storage: 'find' })
  findOne(@Param('id') id: string) {
    return this.storageService.findOne(id);
  }

  @EventPattern({ storage: 'patch' })
  update(@Param('id') id: string, @Body() updateStorageDto: UpdateStorageDto) {
    return this.storageService.update(id, updateStorageDto);
  }

  @EventPattern({ storage: 'delete' })
  remove(@Param('id') id: string) {
    return this.storageService.remove(id);
  }
}
