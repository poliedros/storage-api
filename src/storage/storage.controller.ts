import { Controller, Body, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @EventPattern({ storage: 'create' })
  create(@Payload() createStorageDto: CreateStorageDto) {
    return this.storageService.create(createStorageDto);
  }

  @MessagePattern({ storage: 'findall' })
  findAll() {
    return this.storageService.findAll();
  }

  @MessagePattern({ storage: 'find' })
  findOne(@Payload() id: string) {
    return this.storageService.findOne(id);
  }

  @EventPattern({ storage: 'patch' })
  update(@Payload() updateStorageDto: UpdateStorageDto) {
    const { _id } = updateStorageDto;
    return this.storageService.update(_id, updateStorageDto);
  }

  @EventPattern({ storage: 'delete' })
  remove(@Payload() id: string) {
    return this.storageService.remove(id);
  }
}
