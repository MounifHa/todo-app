import {TestBed, waitForAsync,inject} from '@angular/core/testing';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService, {
        provide: ApiService,
        useClass: ApiMockService
      }],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

});
