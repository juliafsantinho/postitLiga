import { Component } from '@angular/core';
import { LoginPayload } from 'src/app/models/payload/login';
import { HelperService } from 'src/app/services/helper.services';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterPayload } from 'src/app/models/payload/create-user.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly helper: HelperService,
    private readonly router: Router,
    private readonly auth: AuthService,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public registerPayload: RegisterPayload = {
    name: '',
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
  }

  public showSign = false;

  public isRegistering = false;
 
  public isLoading: boolean = false;

  public isSigning: boolean = false;

  public async register(): Promise<void> {
    if (!this.canRegister())
      return;

    this.isLoading = true;
    const [isSuccess, message] = await this.auth.register(this.registerPayload);
    this.isLoading = false;

    if (isSuccess)
      return void await this.router.navigate(['/home']);

    // alert
    await this.helper.showToast(message, 5_000);
  }

  public async login(): Promise<void> {
    if (!this.canLogin())
      return;

    this.isLoading = true;
    const [isSuccess, message] = await this.auth.login(this.loginPayload.email, this.loginPayload.password);
    this.isLoading = false;

    if (isSuccess) {
      return void await this.router.navigate(['/home']);
    }

    // alert
    await this.helper.showToast(message, 5_000);
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email);

    if (emailIsValid && this.loginPayload.password.length >= 6)
      return true;

    return false;
  }

  public canRegister(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    if(this.registerPayload.name.trim().length<=0)
     return false;

    if(!regex.test(this.registerPayload.email))
      return false;

    if(this.registerPayload.email !== this.registerPayload.repeatEmail)
      return false;

    if(this.registerPayload.password.length < 6)
      return false;

    if(this.registerPayload.password !== this.registerPayload.repeatPassword)
      return false;

    return true;
  }

  public logoClick($event: boolean): void {
    console.log($event);
  }

}