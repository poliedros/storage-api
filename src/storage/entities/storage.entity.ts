/* export class Storage {} */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StorageDocument = Storage & Document;

@Schema()
export class Storage {
  @Prop()
  id: string;

  @Prop()
  type: string;

  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  urlName: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  socialMedia: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  additionalInfo: string;
}

export const StorageSchema = SchemaFactory.createForClass(Storage);