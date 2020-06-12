import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { TrackerComponent } from './tracker/tracker.component';
import { AuthGuardService as AuthGuard} from './service/auth-guard.service';
import { AuthLoginService as AuthLogin } from './service/auth-login.service'
import { LoginComponent } from './registerlogin/login/login.component';
import { RegisterComponent } from './registerlogin/register/register.component';
import { UsersComponent } from './users/users.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';


const routes: Routes = [
  { path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
  { path: 'about', component : AboutComponent},
  { path: 'tracker', component: TrackerComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthLogin]},
  { path: '', component: LoginComponent, canActivate: [AuthLogin]},
  { path: 'register', component: RegisterComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'coming-soon', component: ComingsoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
