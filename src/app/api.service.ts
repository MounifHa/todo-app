import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

//import { Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { SessionService } from './session.service';
import { Todo } from './todo';
import { Observable} from 'rxjs';
//import { Observable} from 'rxjs-compat/observable';

import { map, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
import { firstValueFrom } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
//import { catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private session: SessionService
  ) {
  }

  public signIn(username: string, password: string) {
    return this.http
      .post(API_URL + '/sign-in', {
        username,
        password
      }).pipe(
        //map(response => response.json()),
        catchError(this.handleError)
      );
  }

  public getAllTodos(): Observable<Todo[]> {
    const options = this.getRequestOptions();
    return this.http.get<Todo[]>(`${API_URL}/todos`, options).pipe(
      map(response => {
        return response.map(todo => new Todo(todo));
      }),
      catchError(this.handleError)
    );
  }

  public createTodo(todo: Todo): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http.post<Todo>(`${API_URL}/todos`, todo,options).pipe(
      map(response => new Todo(response)),
      catchError(this.handleError)
    );
  }
  
  public async  getTodoByIdAsync(todoId: number): Promise<Todo> {
   // const options = this.getRequestOptions();

        const myData= this.http
        .get<Todo>(API_URL + '/todos/'+todoId).pipe(
          map(response => {
         return response;
        }),
        catchError(error => {
          console.error('Error fetching data', error);
         throw error;
        })
      );
      try {
      return await firstValueFrom(myData);
    } catch (error) {
      console.error('Error in getData:', error);
      throw error; // rethrow the error after logging it
    }
  }

  public getTodoById(todoId: number): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .get(API_URL + '/todos/' + todoId,options).pipe(
        map(response => new Todo(response)),
        catchError(this.handleError)
      );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo,options).pipe(
        map(response => new Todo(response)),
        catchError(this.handleError)
      );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    const options = this.getRequestOptions();
    return this.http
      .delete(API_URL + '/todos/' + todoId, options).pipe(
        map(response => null),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse | any) {
    console.error('ApiService::handleError', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }

  private getRequestOptions() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.session.accessToken
    });
    return {headers};
  }
}