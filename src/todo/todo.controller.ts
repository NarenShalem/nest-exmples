import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoEntity } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/list')
  getTodoList(): TodoEntity[] {
    return this.todoService.getTodoList();
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }

  @Post('/save')
  create(@Body() body: TodoEntity) {
    this.todoService.crateTodo(body);
    return {
      message: 'todo created successfully!',
      body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: TodoEntity) {
    const updatedList = this.todoService.updateTodo(id, body);
    return {
      message: 'name updated successfully!',
      updatedList,
    };
  }
}
