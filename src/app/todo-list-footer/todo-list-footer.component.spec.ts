import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFooterComponent } from './todo-list-footer.component';

describe('TodoListFooterComponent', () => {
  let component: TodoListFooterComponent;
  let fixture: ComponentFixture<TodoListFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
