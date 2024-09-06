import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskFormComponent } from './component/task-form/task-form.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task/new', component: TaskFormComponent },
  { path: 'task/edit/:id', component: TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}