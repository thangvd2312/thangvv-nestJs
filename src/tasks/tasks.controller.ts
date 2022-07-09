import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from '../tasks/dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get()
  getTaskById(id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
