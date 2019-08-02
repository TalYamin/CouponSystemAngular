import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public pageTitle  = 'Welcome Admin';
  adminLoginStatus : boolean;

  constructor(private _router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('clientType') == 'ADMIN'){
      this.adminLoginStatus = true;
    }else{
      this._router.navigate(["/login"])
    }
  }

  logOut(){
    sessionStorage.clear();
    this._router.navigate(["/login"])
  }

}



