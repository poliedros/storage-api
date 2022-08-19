/* export class Item {} */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

  @Prop()
  subType: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  image: string;

  @Prop()
  userId: string;

  // Indexed property for fast lookup
  @Prop()
  storageId: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
