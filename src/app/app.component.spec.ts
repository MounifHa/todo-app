/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';
import { TodosComponent } from './todos/todos.component';
import { Observable , of} from 'rxjs';

describe('AppComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,AppComponent
        ],
        declarations: [
          
        ],
        providers: [
          TodoDataService,
          {
            provide: ApiService,
            useClass: ApiMockService
          }
        ],
        schemas: [
          NO_ERRORS_SCHEMA
        ]
      }).compileComponents();
    });
  
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });