import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly uri = "https://localhost:5001/api";
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }
  formModel = this.formBuilder.group({
    UserName : ['', Validators.required],
    FirstName : [''],
    LastName: [''],
    Password : ['', [Validators.required, Validators.minLength(4)]],
    })

  onRegister() {
    var httpBody = {
      UserName : this.formModel.value.UserName,
      FirstName : this.formModel.value.FirstName,
      LastName : this.formModel.value.LastName,
      Password : this.formModel.value.Password
    }
    // /auth/register - Mac, /register - Windows
    return this.http.post(this.uri + "/auth/register", httpBody);
  }

}
