import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from '../tasks/dto/create-task.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task: Task) => task.id === id);
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
