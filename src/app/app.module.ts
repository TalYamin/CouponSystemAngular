import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ComOpeComponent } from './Components/admin/com-ope/com-ope.component';
import { CusOpeComponent } from './Components/admin/cus-ope/cus-ope.component';
import { DetailsComponent } from './Components/admin/details/details.component';
import { AddCompanyComponent } from './Components/admin/com-ope/operations/add-company/add-company.component';
import { RemoveCompanyComponent } from './Components/admin/com-ope/operations/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './Components/admin/com-ope/operations/update-company/update-company.component';
import { ViewAllCompaniesComponent } from './Components/admin/com-ope/operations/view-all-companies/view-all-companies.component';
import { ViewCompanyComponent } from './Components/admin/com-ope/operations/view-company/view-company.component';
import { AddCustomerComponent } from './Components/admin/cus-ope/operations/add-customer/add-customer.component';
import { RemoveCustomerComponent } from './Components/admin/cus-ope/operations/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './Components/admin/cus-ope/operations/update-customer/update-customer.component';
import { ViewAllCustomersComponent } from './Components/admin/cus-ope/operations/view-all-customers/view-all-customers.component';
import { ViewCustomerComponent } from './Components/admin/cus-ope/operations/view-customer/view-customer.component';
import { CompanyComponent } from './Components/company/company.component';
import { ComActsComponent } from './Components/company/com-acts/com-acts.component';
import { AddCouponComponent } from './Components/company/com-acts/actions/add-coupon/add-coupon.component';
import { RemoveCouponComponent } from './Components/company/com-acts/actions/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './Components/company/com-acts/actions/update-coupon/update-coupon.component';
import { ViewCouponComponent } from './Components/company/com-acts/actions/view-coupon/view-coupon.component';
import { ViewAllCouponsComponent } from './Components/company/com-acts/actions/view-all-coupons/view-all-coupons.component';
import { ViewCouponByTypeComponent } from './Components/company/com-acts/actions/view-coupon-by-type/view-coupon-by-type.component';
import { ViewCouponByPriceComponent } from './Components/company/com-acts/actions/view-coupon-by-price/view-coupon-by-price.component';
import { ViewCouponByDateComponent } from './Components/company/com-acts/actions/view-coupon-by-date/view-coupon-by-date.component';
import { CompanyDetailsComponent } from './Components/company/company-details/company-details.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { CusActComponent } from './Components/customer/cus-act/cus-act.component';
import { ViewAllMyCouponsComponent } from './Components/customer/cus-act/actions/view-all-my-coupons/view-all-my-coupons.component';
import { ViewMyCouponsByTypeComponent } from './Components/customer/cus-act/actions/view-my-coupons-by-type/view-my-coupons-by-type.component';
import { ViewMyCouponsByPriceComponent } from './Components/customer/cus-act/actions/view-my-coupons-by-price/view-my-coupons-by-price.component';
import { CouponListComponent } from './Components/customer/coupon-list/coupon-list.component';
import { CustomerDetailsComponent } from './Components/customer/customer-details/customer-details.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CompanyFilterPipe } from './Pipes/company-filter.pipe';
import { CustomerFilterPipe } from './Pipes/customer-filter.pipe';
import { CouponFilterPipe } from './Coupons/coupon-filter.pipe';
import { LoginComponent } from './home/login.component';
import { HttpRequestInterceptor } from './HttpRequestInterceptor';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';
import { ContactComponent } from './home/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ComOpeComponent,
    CusOpeComponent,
    DetailsComponent,
    AddCompanyComponent,
    RemoveCompanyComponent,
    UpdateCompanyComponent,
    ViewAllCompaniesComponent,
    ViewCompanyComponent,
    AddCustomerComponent,
    RemoveCustomerComponent,
    UpdateCustomerComponent,
    ViewAllCustomersComponent,
    ViewCustomerComponent,
    CompanyComponent,
    ComActsComponent,
    AddCouponComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    ViewCouponComponent,
    ViewAllCouponsComponent,
    ViewCouponByTypeComponent,
    ViewCouponByPriceComponent,
    ViewCouponByDateComponent,
    CompanyDetailsComponent,
    CustomerComponent,
    CusActComponent,
    ViewAllMyCouponsComponent,
    ViewMyCouponsByTypeComponent,
    ViewMyCouponsByPriceComponent,
    CouponListComponent,
    CustomerDetailsComponent,
    CompanyFilterPipe,
    CustomerFilterPipe,
    CouponFilterPipe, 
    LoginComponent, 
    WelcomeComponent,
    AboutComponent, 
    ContactComponent
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    

  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
