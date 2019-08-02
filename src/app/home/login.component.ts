import { Component, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginUser } from './loginUser';
import { IsetCookie } from '../Models/IsetCookie';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnDestroy  {

  public pageTitle: string = "Login";
  @ViewChild('f') userLoginForm: NgForm;

  public result: IsetCookie;


  obsSubscription: Subscription = null;
  responseString: string;
  loginUser: LoginUser = <LoginUser>{};


  constructor(private srvAuthentication: AuthenticationService, private _router: Router) { }


  ngOnInit() {
  }

  onSubmit() {
    this.responseString = " ";
    this.loginUser.username = this.userLoginForm.value.username;
    this.loginUser.password = this.userLoginForm.value.password;
    this.loginUser.clientType = this.userLoginForm.value.clientType;


    this.obsSubscription = this.srvAuthentication.login(this.loginUser).subscribe(
      (data) => {
        console.log(data);
        this.result = <IsetCookie>{};
          this.result = data;
        if (this.result == null) {
          this.onResponse();
          this._router.navigate(["/login"])
        }

        else {
          sessionStorage.setItem('Cookie', this.result.value as string)
          switch (this.result.comment) {
            case "ADMIN": {
              sessionStorage.setItem('clientType', this.result.comment)
              this._router.navigate(["/admin"])
              break;
            }
            case "COMPANY":
              sessionStorage.setItem('clientType', this.result.comment)
              this._router.navigate(["/company"])
              break;
            case "CUSTOMER":
              sessionStorage.setItem('clientType', this.result.comment)
              this._router.navigate(["/customer"])
              break;
            default:
          }
        }
      },

      (err) => { console.log(err); this.responseString = err }
    );
  }

  onResponse() {
    this.responseString = "Login Failed, please try again";
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }

}