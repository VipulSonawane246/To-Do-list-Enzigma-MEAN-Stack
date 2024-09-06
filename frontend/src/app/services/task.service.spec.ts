import { TestBed } from '@angular/core/testing';
   import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
   import { TaskService } from './task.service';

   describe('TaskService', () => {
     let service: TaskService;
     let httpMock: HttpTestingController;

     beforeEach(() => {
       TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [TaskService]
       });

       service = TestBed.inject(TaskService);
       httpMock = TestBed.inject(HttpTestingController);
     });

     it('should retrieve tasks from API', () => {
       const dummyTasks = [{ title: 'Test Task', description: 'Test Description', dueDate: new Date(), status: 'Not Started', priority: 'Normal' }];

       service.getTasks().subscribe(tasks => {
         expect(tasks.length).toBe(1);
         expect(tasks).toEqual(dummyTasks);
       });

       const request = httpMock.expectOne(`${service['baseUrl']}/tasks`);
       expect(request.request.method).toBe('GET');
       request.flush(dummyTasks);
     });

     afterEach(() => {
       httpMock.verify();
     });
   });