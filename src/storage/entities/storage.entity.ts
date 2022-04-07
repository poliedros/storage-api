/* export class Storage {} */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StorageDocument = Storage & Document;

@Schema()
export class Storage {
  @Prop()
  name: string;

  @Prop()
  urlName: string;

  @Prop()
  code: string;
}

export const StorageSchema = SchemaFactory.createForClass(Storage);