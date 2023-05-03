import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode, HttpHeaders } from '@angular/common/http'
import { environment } from './../../../environments/environment'
import { Auth } from './../../models/auth.model'
import { User } from './../../models/user.model';
import { TokenService } from './../token/token.service'
import { switchMap, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = `${environment.API_URL}/api/auth`;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post<Auth>(`${this.apiURL}/login`, {email, password})
        .pipe(
          tap((response) => {
            this.tokenService.saveToken(response.access_token);
          })
        );
  }

  profile() {
    // const headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<User>(`${this.apiURL}/profile`);
  }

  loginAndGet(email: string, password: string) {
    return this.httpClient.post<Auth>(`${this.apiURL}/login`, {email, password})
        .pipe(
          switchMap(() => {
            return this.profile();
          })
        );
  }
}
