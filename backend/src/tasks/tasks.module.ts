import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller.js';
import { TasksService } from './tasks.service.js';
import { TaskSchema, Task } from '../schemas/task.schema.js';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: Task.name, schema: TaskSchema 
      }
    ])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule { }