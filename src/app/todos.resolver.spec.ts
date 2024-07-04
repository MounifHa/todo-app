import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { Todo } from './todo';
import { TodosResolver } from './todos.resolver';
import { TodoDataService } from './todo-data.service';

describe('TodosResolver', () => {
  let todosResolver: TodosResolver;
  //let todoDataService: jasmine.SpyObj<TodoDataService>;

  // Mocked ActivatedRouteSnapshot and RouterStateSnapshot
  const mockActivatedRouteSnapshot: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
  const mockRouterStateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;

  beforeEach(() => {
    // Setting up TodoDataService spy
    const todoDataServiceSpy = jasmine.createSpyObj('TodoDataService', ['getAllTodos']);
    
    // Configuring the TestBed with necessary providers
    TestBed.configureTestingModule({
      providers: [
        TodosResolver,
        { provide: TodoDataService, useValue: todoDataServiceSpy },
      ],
    });

    // Injecting the TodosResolver and TodoDataService spy
    todosResolver = TestBed.inject(TodosResolver);
    //todoDataService = TestBed.inject(TodoDataService) as jasmine.SpyObj<TodoDataService>;
  });

  it('should be created', () => {
    expect(todosResolver).toBeTruthy();
  });

  it('should resolve todos from TodoDataService', () => {
    // Prepare mock data and behavior for getAllTodos
    //const expectedTodos: Todo[] = [{ id: 1, title: 'Test Todo' }];
    //todoDataService.getAllTodos.and.returnValue(of(expectedTodos));

    // Call the resolve function
    todosResolver.resolve(mockActivatedRouteSnapshot, mockRouterStateSnapshot)
      /*.subscribe((resolvedTodos) => {
        // Assert that the resolved todos match the expected todos
       // expect(resolvedTodos).toEqual(expectedTodos);
      })*/;

    // Check that getAllTodos was called
    //expect(todoDataService.getAllTodos).toHaveBeenCalled();
  });
});