import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http'
import { environment } from './../../../environments/environment'
import { CreateUserDTO, User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = `${environment.API_URL}/api/users`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUser() {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  create(data: CreateUserDTO) {
    return this.httpClient.post<User>(this.apiURL, data);
  }
}
