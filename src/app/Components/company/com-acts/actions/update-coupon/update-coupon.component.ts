import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEndDate } from 'src/app/Coupons/ICoupon';
import { Subscription } from 'rxjs';
import { IStatus } from 'src/app/Models/IStatus';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') updateCouponForm : NgForm;

  couponId: number;
  newEndDate: string;
  newPrice: number;
  obsSubscription : Subscription = null;
  updateCouponStatus : IStatus;
  responseString: string;

  

  constructor(private srvCompany: CompanyService) { }


  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.couponId = this.updateCouponForm.value.couponId;
    this.newEndDate = this.updateCouponForm.value.newEndDate;
    this.newPrice = this.updateCouponForm.value.newPrice;
    
    this.obsSubscription = this.srvCompany.updateCoupon(this.couponId, this.newEndDate, this.newPrice).subscribe(
      (data) => {console.log(data); this.updateCouponStatus = data; this.onResponse();},
      (err) => {console.log(err); this.responseString = err}
    );
  }
  
  onResponse(){
    this.responseString = this.updateCouponStatus.message;
   }
   ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
