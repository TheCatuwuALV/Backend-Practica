import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { TasksModule } from './tasks/tasks.module.js';
import { MongooseModule } from '@nestjs/mongoose';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'backend'
    }),
    MongooseModule.forRoot('mongodb://localhost/tasksdb'),
    TasksModule
  ],
})
export class AppModule {}