import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {TodoDataService} from '../todo-data.service';
// Import class so we can register it as dependency injection token
import {Todo} from '../todo';
import { TodoListHeaderComponent } from '../todo-list-header/todo-list-header.component';
import { TodoListFooterComponent } from '../todo-list-footer/todo-list-footer.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterOutlet,FormsModule ,CommonModule,TodoListHeaderComponent,
    TodoListFooterComponent, TodoListItemComponent, TodoListComponent
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers: []
})
export class TodosComponent implements OnInit {

  newTodo: Todo = new Todo();

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService,
    private route: ActivatedRoute,private auth: AuthService,
    private router: Router) {
  }

  public ngOnInit() {
    this.route.data
      .pipe(map(data => data['todos'] as Todo[]))
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  onAddTodo(todo : Todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo : Todo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo : any) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onToggleTodoComplete(todo:Todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo:Todo) => {
          todo = updatedTodo;
        }
      );
  }
  removeTodo(todo : any) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  onRemoveTodo(todo:Todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

  get todosInMemory() {
    return this.todoDataService.getAllTodos();
  }

  doSignOut() {
    this.auth.doSignOut();
    this.router.navigate(['/sign-in']);
  }
}