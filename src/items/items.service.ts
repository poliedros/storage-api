import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item, ItemDocument } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private itemsModel: Model<ItemDocument>,
  ) {}

  create(createItemDto: CreateItemDto) {
    const items = new this.itemsModel(createItemDto);
    return items.save();
  }

  findAll() {
    return this.itemsModel.find();
  }

  findOne(id: string) {
    return this.itemsModel.findById(id);
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return this.itemsModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateItemDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.itemsModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
