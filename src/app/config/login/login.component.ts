import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticateServiceService } from '../../service/config/hardcode-authenticate-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  invalid: boolean = false;

  constructor(
    private router: Router,
    private hardcodeAuthenticateServiceService: HardcodeAuthenticateServiceService
  ) {}

  clickLogin() {
    if (
      this.hardcodeAuthenticateServiceService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(['welcome', this.username]);
      this.invalid = false;
    } else {
      this.invalid = true;
    }
  }
}
