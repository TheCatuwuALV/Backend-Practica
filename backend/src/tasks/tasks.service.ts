import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    return this.taskModel.find();
  }

  async create(createTask: any) {
    const createdTask = new this.taskModel(createTask);
    return createdTask.save();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }

  async update(id: string, updateTask: any) {
    return this.taskModel.findByIdAndUpdate(id, updateTask, { new: true });
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}