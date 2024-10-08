import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticateServiceService } from 'src/app/service/config/hardcode-authenticate-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isUserLogin: boolean = false;

  constructor(
    private hardcodeAuthenticateServiceService: HardcodeAuthenticateServiceService
  ) {}

  ngOnInit(): void {
    this.isUserLogin = this.hardcodeAuthenticateServiceService.isUserLogin();
  }
}
