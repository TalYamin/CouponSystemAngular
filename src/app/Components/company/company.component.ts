import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICompany } from './ICompany';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, OnDestroy {
  

  companyName : string;
  pageTitle: string;
  obsSubscription : Subscription = null;
  company: ICompany;
  responseString: string;
  companyLoginStatus : boolean;
  

  constructor(private srvCompany: CompanyService, private _router: Router) { }

  ngOnInit() {
    this.companyLoginStatus = false;
    if(sessionStorage.getItem('clientType') != 'COMPANY'){
      this._router.navigate(["/login"])
    }
     this.obsSubscription = this.srvCompany.viewCompany().subscribe(
      (data) => {console.log(data); this.company = data;
        if(this.company == null) {
          this._router.navigate(["/login"])
        }
        else{
          this.companyLoginStatus = true;
          this.pageTitle = "Welcome " + this.company.companyName;
        }
      },
      (err) => {console.log(err);this.responseString = err;this._router.navigate(["/login"])}
    );
  }

  logOut(){
    sessionStorage.clear();
    this._router.navigate(["/login"])
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
  

}
