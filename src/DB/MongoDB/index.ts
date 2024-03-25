import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from '../../Entity/Mongo/Resume/Resume.Schema';

export const MongoDB = MongooseModule.forRoot(
  'mongodb://127.0.0.1:27017/resume',
);

export const mogonSchema = MongooseModule.forFeature([
  { name: Resume.name, schema: ResumeSchema },
]);
