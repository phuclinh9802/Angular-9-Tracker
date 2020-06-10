import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  openNav():void {
    document.getElementById("sb").style.width = "100%";
    document.getElementById("name").style.display = "block";
    document.getElementById("ul").style.display = "block";

  }

  closeNav():void {
    document.getElementById("sb").style.width = "0%";
    document.getElementById("name").style.display = "none";
    document.getElementById("ul").style.display = "none";

  }

  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(['/login']);
  }

}
