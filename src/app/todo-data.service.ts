import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [];

  constructor(private api: ApiService) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate POST /todos
  addTodoInMemory(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<Todo | null> {
    return this.api.deleteTodoById(todoId);
  }
  // Simulate DELETE /todos/:id
  deleteTodoByIdInMemory(todoId: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== todoId);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoInMemory(id: number, values: Object = {}): Todo | null {
    let todo = this.getTodoByIdInMemory(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos
  getAllTodosInMemory(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Simulate GET /todos/:id
  getTodoByIdInMemory(id: number): Todo | null {
    const todo = this.todos
      .filter(todo => todo.id === id)
      .pop();
    return todo !== undefined ? todo : null;
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

  // Toggle todo complete
  toggleTodoCompleteInMemory(todo: Todo) {
    let updatedTodo = this.updateTodoInMemory(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
