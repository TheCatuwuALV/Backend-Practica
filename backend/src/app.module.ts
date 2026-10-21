import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tasksdb'),
    TasksModule,
  ],
})
export class AppModule {}