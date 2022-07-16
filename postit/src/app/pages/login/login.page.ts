import { Component, OnInit } from '@angular/core';
import { loginPayload } from 'src/app/models/payload/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor() { }

  public loginPayload: loginPayload = {
    email: '',
    password: '',
  }

  public login():void {
    console.log(this.loginPayload)
  }
  
}
