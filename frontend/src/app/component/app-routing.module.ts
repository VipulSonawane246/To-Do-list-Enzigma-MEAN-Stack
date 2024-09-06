import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { TaskListComponent } from './component/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskFormComponent },
  { path: 'tasks', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
