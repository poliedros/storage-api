import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @EventPattern({ items: 'create' })
  create(@Payload() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @MessagePattern({ items: 'findall' })
  findAll() {
    return this.itemsService.findAll();
  }

  @MessagePattern({ items: 'find' })
  findOne(@Payload('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @EventPattern({ items: 'patch' })
  update(@Payload() updateItemDto: UpdateItemDto) {
    const { _id } = updateItemDto;
    return this.itemsService.update(_id, updateItemDto);
  }

  @EventPattern({ items: 'remove' })
  remove(@Payload() id: string) {
    return this.itemsService.remove(id);
  }
}
