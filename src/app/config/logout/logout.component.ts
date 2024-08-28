import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticateServiceService } from 'src/app/service/config/hardcode-authenticate-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private hardcodeAuthenticateServiceService: HardcodeAuthenticateServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hardcodeAuthenticateServiceService.logout();
    this.router.navigate(['login']);
  }
}
