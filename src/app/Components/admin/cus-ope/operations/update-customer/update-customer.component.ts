import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IStatus } from 'src/app/Models/IStatus';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') updateCustomeryForm : NgForm;

  customerId: number;
  newCustomerPassword : string;
  obsSubscription : Subscription = null;
  updateCustomerStatus : IStatus;
  responseString: string;
  
  constructor(private srvAdmin: AdminService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.customerId = this.updateCustomeryForm.value.customerId;
    this.newCustomerPassword = this.updateCustomeryForm.value.newCustomerPassword;
   

    this.obsSubscription = this.srvAdmin.updateCustomer(this.customerId, this.newCustomerPassword).subscribe(
      (data) => {console.log(data); this.updateCustomerStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }

  onResponse(){
    this.responseString = this.updateCustomerStatus.message;
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
