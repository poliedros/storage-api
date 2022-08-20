import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { Storage, StorageDocument } from './entities/storage.entity';

@Injectable()
export class StorageService {
  constructor(
    @InjectModel(Storage.name) private storageModel: Model<StorageDocument>,
  ) {}

  create(createStorageDto: CreateStorageDto) {
    const storage = new this.storageModel(createStorageDto);
    return storage.save();
  }

  findAll() {
    return this.storageModel.find();
  }

  findOne(id: string) {
    return this.storageModel.findById(id);
  }

  update(id: string, updateStorageDto: UpdateStorageDto) {
    return this.storageModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateStorageDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.storageModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }

  async findStorageByUserId(userId: string) {
    return this.storageModel.findOne({ userId: userId });
  }
}
