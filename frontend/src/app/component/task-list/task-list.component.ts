import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/taskservice';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  searchQuery = '';

  constructor(private taskservice: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskservice.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  editTask(task: any): void {
    // Implement edit functionality
  }

  deleteTask(id: string): void {
    this.taskservice.deleteTask(id).subscribe(() => {
      this.getTasks();
    });
  }

  openTaskForm(): void {
    // Implement navigation to add new task form
  }
}