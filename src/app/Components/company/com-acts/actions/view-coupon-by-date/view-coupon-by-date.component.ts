import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICoupon } from 'src/app/Coupons/ICoupon';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-view-coupon-by-date',
  templateUrl: './view-coupon-by-date.component.html',
  styleUrls: ['./view-coupon-by-date.component.css']
})
export class ViewCouponByDateComponent implements OnInit, OnDestroy
{

  @ViewChild('f') viewAllCouponsByDateForm: NgForm;

  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  obsSubscription: Subscription = null;
  coupons: ICoupon[];
  responseString: string;
  listFilter: string = "";
  untilDate: string;

  constructor(private srvCompany: CompanyService) { }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onSubmit() {
    this.responseString = " ";
    this.untilDate = this.viewAllCouponsByDateForm.value.untilDate;

      this.obsSubscription = this.srvCompany.viewAllCouponsByDate(this.untilDate).subscribe(
        (data) => {
          console.log(data); this.coupons = data;
          if (this.coupons === null) {
            this.onResponse();
          }
        },
        (err) => { console.log(err); this.responseString = err; }
      );
  }

  onResponse() {
    this.responseString = "Failed, No Results";
  }
  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}
