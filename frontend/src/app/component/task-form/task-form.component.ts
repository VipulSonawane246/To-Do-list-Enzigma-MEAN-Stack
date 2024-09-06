import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/taskservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() taskForm = {
    title: '',
    description: '',
    dueDate: '',
    status: 'Not Started',
    priority: 'Normal'
  };
  isEdit = false;

  constructor(private taskservice: TaskService, private router: Router) {}

  ngOnInit(): void {
    // Load existing task data if editing
  }

  onSubmit(): void {
    if (this.isEdit) {
      // Call update task API
    } else {
      this.taskservice.createTask(this.taskForm).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }
}