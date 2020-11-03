import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from '@angular/common/http';
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
    MomentPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
