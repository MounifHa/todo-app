import { ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todo'; // Adjust the import path as necessary
import { TodoDataService } from './todo-data.service'; // Adjust the import path as necessary

/*export const todosResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};*/

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<Observable<Todo[]>> {

  constructor(
    private todoDataService: TodoDataService
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo[]> {
    return this.todoDataService.getAllTodos();
  }
}