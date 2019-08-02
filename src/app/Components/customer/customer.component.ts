import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomer } from './ICustomer';
import { CustomerService } from 'src/app/Services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {

  customerName : string;
  pageTitle: string;
  obsSubscription : Subscription = null;
  customer: ICustomer;
  responseString: string;
  customerLoginStatus : boolean;

  constructor(private srvCustomer: CustomerService, private _router: Router) { }

  ngOnInit() {
    this.customerLoginStatus = false;
    if(sessionStorage.getItem('clientType') != 'CUSTOMER'){
      this._router.navigate(["/login"])
    }
    this.obsSubscription = this.srvCustomer.viewCustomer().subscribe(
      (data) => {console.log(data); this.customer = data;
        if(this.customer == null) {
          this._router.navigate(["/login"])
        }
        else{
          this.customerLoginStatus = true;
          this.pageTitle = "Welcome " + this.customer.customerName;
        }
      },
      (err) => {console.log(err);this.responseString = err,this._router.navigate(["/login"])}
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
