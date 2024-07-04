import { Component , Input } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-footer.component.html',
  styleUrl: './todo-list-footer.component.css'
})
export class TodoListFooterComponent {
  @Input()
  todos: Todo[] = [];

  constructor() {
  }
}
