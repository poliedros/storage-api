import { Controller, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @EventPattern({ items: 'create' })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @MessagePattern({ items: 'findall' })
  findAll() {
    return this.itemsService.findAll();
  }

  @MessagePattern({ items: 'find' })
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @EventPattern({ items: 'patch' })
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }

  @EventPattern({ items: 'remove' })
  remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}
