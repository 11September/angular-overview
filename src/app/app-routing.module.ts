import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';
import { PlanningComponent } from './planning/planning.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveComponent} from './reactive/reactive.component';
import {EventsComponent} from './events/events.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventsComponent,
    canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
