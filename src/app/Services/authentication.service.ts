import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginUser } from '../home/loginUser';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({ providedIn: "root" })
export class AuthenticationService {

    private _urlLogin = 'http://localhost:8080/CouponSystemREST/rest/login';

    constructor(private http: HttpClient) {

    }

    login(user:LoginUser) {
        return this.http.post<any>(this._urlLogin, user).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err)
                    return throwError('error in http login')

                }
            )
        )
    }


}

