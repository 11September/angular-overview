import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    email: '',
    password: ''
  };

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(): any{
    this.authService.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/events']);
      },
      err => console.log(err),
    );
  }
}
