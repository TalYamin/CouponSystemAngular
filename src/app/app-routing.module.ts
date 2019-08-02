import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { LoginComponent } from './home/login.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';
import { ContactComponent } from './home/contact.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'welcome', component: WelcomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: ' ', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    {
      path: 'admin', component: AdminComponent, children: [
        { path: 'Details', component: DetailsComponent },
        {
          path: 'CompanyOperations', component: ComOpeComponent, children:
            [
              { path: 'AddCompany', component: AddCompanyComponent },
              { path: 'RemoveCompany', component: RemoveCompanyComponent },
              { path: 'UpdateCompany', component: UpdateCompanyComponent },
              { path: 'ViewAllCompanies', component: ViewAllCompaniesComponent },
              { path: 'ViewCompany', component: ViewCompanyComponent },
            ]
        },
        {
          path: 'CustomerOperations', component: CusOpeComponent, children:
            [
              { path: 'AddCustomer', component: AddCustomerComponent },
              { path: 'RemoveCustomer', component: RemoveCustomerComponent },
              { path: 'UpdateCustomer', component: UpdateCustomerComponent },
              { path: 'ViewAllCustomers', component: ViewAllCustomersComponent },
              { path: 'ViewCustomer', component: ViewCustomerComponent },
            ]
        },
      ]
    },
    {
      path: 'company', component: CompanyComponent, children: [
        { path: 'CompanyDetails', component: CompanyDetailsComponent },
        {
          path: 'CompanyActions', component: ComActsComponent, children: [
            { path: 'AddCoupon', component: AddCouponComponent },
            { path: 'RemoveCoupon', component: RemoveCouponComponent },
            { path: 'UpdateCoupon', component: UpdateCouponComponent },
            { path: 'ViewCoupon', component: ViewCouponComponent },
            { path: 'ViewAllCoupons', component: ViewAllCouponsComponent },
            { path: 'ViewAllCouponsByType', component: ViewCouponByTypeComponent },
            { path: 'ViewAllCouponsByPrice', component: ViewCouponByPriceComponent },
            { path: 'ViewAllCouponsByDate', component: ViewCouponByDateComponent },
          ]
        }
      ]
    },
    {
      path: 'customer', component: CustomerComponent, children: [
        { path: 'CustomerDetails', component: CustomerDetailsComponent },
        { path: 'CouponList', component: CouponListComponent },
        {
          path: 'CustomerActions', component: CusActComponent, children: [
            { path: 'ViewAllMyCoupons', component: ViewAllMyCouponsComponent },
            { path: 'ViewAllMyCouponsByType', component: ViewMyCouponsByTypeComponent },
            { path: 'ViewAllMyCouponsByPrice', component: ViewMyCouponsByPriceComponent },
          ]
        }
      ]
    },
    {path: '**', redirectTo:'welcome', pathMatch: 'full'}
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
