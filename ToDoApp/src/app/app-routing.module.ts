import { TaskUpdateComponent } from './components/task/task-update/task-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { TaskCrudComponent } from './views/task-crud/task-crud.component';
import {  TaskCreateComponent } from './components/task/task-create/task-create.component';
import { TaskDeleteComponent } from './components/task/task-delete/task-delete.component';
import { TaskCheckComponent } from './components/task/task-check/task-check.component';
import { TaskPendingComponent } from './components/task/task-pending/task-pending.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
    },
    {
    path: "tasks",
      component:TaskCrudComponent
    },
    {
      path: "tasks/create",
      component: TaskCreateComponent
    },
    {
      path: "tasks/update/:id",
      component: TaskUpdateComponent
    },
    {
      path: "tasks/delete/:id",
      component: TaskDeleteComponent
    },
    {
      path: "tasks/check",
      component: TaskCheckComponent
    },

    {
      path: "tasks/pending",
      component: TaskPendingComponent
    },



 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
