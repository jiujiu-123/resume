import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Resume>;

@Schema()
export class Resume {
  @Prop({
    required: true,
    unique: true,
  })
  userId: string;
  @Prop()
  resumeList: string;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
