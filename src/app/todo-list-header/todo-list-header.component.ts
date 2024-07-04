import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list-header.component.html',
  styleUrl: './todo-list-header.component.css'
})
export class TodoListHeaderComponent {
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}
