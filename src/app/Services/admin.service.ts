import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICustomer } from '../Components/customer/ICustomer';
import { ICompany } from '../Components/company/ICompany';
import { HttpHeaders } from '@angular/common/http';
import { IStatus } from '../Models/IStatus';

@Injectable({ providedIn: "root" })
export class AdminService {


  private BASE_URL = 'http://localhost:8080/CouponSystemREST/rest/admin';
  private assetURL = './assets/api/company.json';
  private assetURL1 = "";


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  addCompany(company: ICompany): Observable<IStatus> {
    const url = `${this.BASE_URL}/addCompany`
    var addCompanyJson = {
      "companyId": company.companyId,
      "companyName": company.companyName,
      "companyPassword": company.companyPassword,
      "companyEmail": company.companyEmail
    }
    return this.http.post<IStatus>(url, addCompanyJson, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError('error in http addCompany')
        }
      )
    )
  }

  removeCompany(companyId: number): Observable<IStatus> {
    const url = `${this.BASE_URL}/removeCompany/${companyId}`
    return this.http.delete<IStatus>(url, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError("error in http removeCompany")
        }
      )
    )
  }

  updateCompany(companyId: number, newCompanyPassword: string, newCompanyEmail: string): Observable<IStatus> {
    const url = `${this.BASE_URL}/updateCompany`
    var updateCompanyJson = {
      "companyId": companyId,
      "newCompanyPassword": newCompanyPassword,
      "newCompanyEmail": newCompanyEmail
    }
    return this.http.post<IStatus>(url, updateCompanyJson, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError('error in http updateCompany')
        }
      )
    )

  }

  viewAllCompanies(): Observable<ICompany[]> {
  const url = `${this.BASE_URL}/getAllCompanies`
    return this.http.get<ICompany[]>(url).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError("error in http getAllCompanies")
        }

      )
    )
  }

  viewCompany(companyId: number): Observable<ICompany> {
    const url = `${this.BASE_URL}/getCompany/${companyId}`
    return this.http.get<ICompany>(url).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError("error in http getCompany")
        }

      )
    )
  }

  addCustomer(customer: ICustomer): Observable<IStatus> {
    const url = `${this.BASE_URL}/addCustomer`
    var addCustomerJson = {
      "customerId": customer.customerId,
      "customerName": customer.customerName,
      "customerPassword": customer.customerPassword
    }
    return this.http.post<IStatus>(url, addCustomerJson, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError('error in http addCustomer')
        }
      )
    )
  }

  removeCustomer(customerId: number): Observable<IStatus> {
    const url = `${this.BASE_URL}/removeCustomer/${customerId}`
    return this.http.delete<IStatus>(url, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError("error in http removeCustomer")
        }
      )
    )
  }

  updateCustomer(customerId: number, newCustomerPassword: string): Observable<IStatus> {
    const url = `${this.BASE_URL}/updateCustomer`
    var updateCustomerJson = {
      "customerId": customerId,
      "newCustomerPassword": newCustomerPassword
    }
    return this.http.post<IStatus>(url, updateCustomerJson, this.httpOptions).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err)
          return throwError('error in http updateCustomer')
        }
      )
    )

  }

  viewAllCustomers(): Observable<ICustomer[]> {
    const url = `${this.BASE_URL}/getAllCustomers`
      return this.http.get<ICustomer[]>(url).pipe(
        catchError(
          (err: HttpErrorResponse) => {
            console.log(err)
            return throwError("error in http getAllCustomers")
          }
  
        )
      )
    }

    viewCustomer(customerId: number): Observable<ICustomer> {
      const url = `${this.BASE_URL}/getCustomer/${customerId}`
      return this.http.get<ICustomer>(url).pipe(
        catchError(
          (err: HttpErrorResponse) => {
            console.log(err)
            return throwError("error in http getCustomer")
          }
  
        )
      )
    }

}

