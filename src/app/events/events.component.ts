import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      res => this.events = res,
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

}
