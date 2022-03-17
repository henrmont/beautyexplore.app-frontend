import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/register/account`, user)
  }

  login(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/api/login_check`, user)
  }

  getValidUser(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/get/valid/user`, user)
  }

  getUserInfo(): Observable<Account> {
    return this.http.get<Account>(`${environment.baseUrl}/api/get/user/info`)
  }

  getValidToken(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/get/valid/token`, user)
  }

  confirmEmail(token: any) {
    return this.http.post<Account>(`${environment.baseUrl}/confirm/email`, token)
  }

  requestResetPassword(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/request/reset/password`, user)
  }
  
  resetPassword(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/reset/password`, user)
  }
}
