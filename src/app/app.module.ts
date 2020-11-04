import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodosFilterPipe} from './shared/todos-filter.pipe';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { PlanningComponent } from './planning/planning.component';
import {MomentPipe} from './shared/moment.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveComponent } from './reactive/reactive.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from './auth.service';
import {EventService} from './event.service';
import { EventsComponent } from './events/events.component';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService} from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilterPipe,
    AboutComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    PlanningComponent,
    MomentPipe,
    ReactiveComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, EventService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
