import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService implements CanActivate {

  constructor(private router : Router, private jwtHelper : JwtHelperService) { }

  canActivate() {
    var token = localStorage.getItem("jwt");
    // if navigate back to login page and token is not expired yet
    // -> navigate back to dashboard
    if (token && !this.jwtHelper.isTokenExpired(token) && this.router.navigate(["login"])) {
      this.router.navigate(["dashboard"]);
      return false;
    }
    return true;
  }
}
