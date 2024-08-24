import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  invalid: boolean = false;

  constructor(private router: Router) {}

  clickLogin () {
    if (this.username === 'thimira' && this.password === '123' ) {
      this.router.navigate(['welcome', this.username]);
      this.invalid = false;
    } else {
      this.invalid = true;
    }
  }
}
