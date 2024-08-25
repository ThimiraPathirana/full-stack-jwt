import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './config/login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventComponent } from './event/event.component';
import { RouteGuardServiceService } from './service/config/route-guard-service.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent, canActivate:[RouteGuardServiceService]},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardServiceService]},
  { path: 'event', component: EventComponent, canActivate:[RouteGuardServiceService]},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
