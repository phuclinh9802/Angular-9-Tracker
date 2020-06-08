import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user-service.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService : UserService, public http: HttpClient, public toastr : ToastrService) { }

  ngOnInit(): void {
  }
//   register() {
//     this.userService.onRegister().subscribe(
//       (res:any) => {
//         if (res.succeeded) {
//            console.log("Success!!");
//            this.userService.formModel.reset();
//         }
//         else {
//           console.log('Please try again, thank you!');
//         }
//   })
// }
  register(registerForm: NgForm) {
    let credentials = JSON.stringify(registerForm.value);
    this.http.post("http://practice-753392935.us-east-2.elb.amazonaws.com/api/auth/register", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let res = (<any>response).firstName;
      this.toastr.success("You have registered! Welcome to the club!", "Registration successful")
    }, err => {
        console.log("Please try again!");
    });

  }

}
