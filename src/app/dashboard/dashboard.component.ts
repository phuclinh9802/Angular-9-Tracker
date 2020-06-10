import { Component, OnInit } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import * as $ from "jquery";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidebar: Boolean = false;
  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
    if (document.body.style.width === "400px") {
      this.sidebar = true;
    }
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('fixed', $(this).scrollTop() > $nav.height());
      });
    });
    
  }

  
  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
 
  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(['/login']);
  }

}
