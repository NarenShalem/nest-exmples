import { Injectable } from '@nestjs/common';
import { TodoEntity } from './todo.interface';

@Injectable()
export class TodoService {
  todoList: TodoEntity[] = [
    {
      id: '1',
      name: 'todo1',
    },
    {
      id: '2',
      name: 'todo2',
    },
    {
      id: '3',
      name: 'todo3',
    },
  ];

  getTodoList(): TodoEntity[] {
    return this.todoList;
  }

  getTodo(id): TodoEntity {
    const foundTodo = this.todoList.find((todo: TodoEntity) => todo.id == id);
    return foundTodo;
  }

  crateTodo(todo: TodoEntity): any {
    return this.todoList.push(todo);
  }

  deleteTodo(id: string): TodoEntity[] {
    this.todoList = this.todoList.filter((todo: TodoEntity) => todo.id !== id);
    return this.todoList;
  }

  updateTodo(id: string, body: TodoEntity): TodoEntity[] {
    const index = this.todoList.findIndex((todo: TodoEntity) => todo.id == id);
    this.todoList[index].name = body.name;
    return this.todoList;
  }
}
