import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema.js';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto.js';
import { UpdateTaskDto } from '../dto/update-task.dto.js';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    return this.taskModel.find();
  }

  async create(createTask: CreateTaskDto) {
    const newTask = new this.taskModel(createTask);
    return newTask.save();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }

  async update(id: string, updateTask: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTask, { new: true });
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}