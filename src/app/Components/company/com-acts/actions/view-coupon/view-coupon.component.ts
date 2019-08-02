import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICoupon } from 'src/app/Coupons/ICoupon';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent implements OnInit, OnDestroy
{

  @ViewChild ('f') viewCouponForm : NgForm;
  couponId: number;
  imageWidth : number = 200;
  imageMargin : number = 2;
  obsSubscription : Subscription = null;
  coupon: ICoupon;
  responseString: string;
  customStartDate: string;
  customEndDate: string;

  constructor(private srvCompany: CompanyService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.responseString = " ";
    this.customStartDate = " ";
    this.customEndDate = " ",
    this.couponId = this.viewCouponForm.value.couponId;
    console.log(this.couponId);

    this.obsSubscription = this.srvCompany.viewCoupon(this.couponId).subscribe(
      (data) => {console.log(data); this.coupon = data;
        if(this.coupon === null) {
          this.onResponse();
        }
        else {
          this.customStartDate = `${this.coupon.startDate.day}/${this.coupon.startDate.month}/${this.coupon.startDate.year}`
          this.customEndDate = `${this.coupon.endDate.day}/${this.coupon.endDate.month}/${this.coupon.endDate.year}`
        }
      },
      (err) => {console.log(err);this.responseString = err}
    );
  }

  onResponse(){
    this.responseString = "Failed, No Results";
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
