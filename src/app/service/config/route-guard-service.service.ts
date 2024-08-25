import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodeAuthenticateServiceService } from './hardcode-authenticate-service.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardServiceService implements CanActivate {
  constructor(
    private hardcodeAuthenticateServiceService: HardcodeAuthenticateServiceService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodeAuthenticateServiceService.isUserLogin()) {
      this.router.navigate(['login']);
      return true;
    } else {
      return false;
    }
  }
}
