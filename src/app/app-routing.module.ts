import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'planning', component: PlanningComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
