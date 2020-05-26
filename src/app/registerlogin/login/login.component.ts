import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { ActivatedRoute, RouterModule, Router } from "@angular/router";
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = true;
  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm): void {
    let credentials = JSON.stringify(form.value);
    this.http.post("https://localhost:5001/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

  logout() : void {
    localStorage.removeItem('jwt');
  }

}
