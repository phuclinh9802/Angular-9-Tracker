import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router, private jwtHelper : JwtHelperService) { }
  
  canActivate() {
    var token = localStorage.getItem("jwt");
 
    // Check if the token is legit and is not expired
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    // Else, navigate back to login page
    this.router.navigate(["login"]);
    return false;
  }
}
