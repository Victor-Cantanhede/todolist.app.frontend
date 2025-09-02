import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class UserService extends ApiService {

  // ===========================================================================================
  authUser(payload: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.userRoute}/auth`, payload, { withCredentials: true });
  }

  // ===========================================================================================
  createUser(payload: { name: string, username: string, password: string }): Observable<any> {
    return this.http.post(`${this.userRoute}/create`, payload);
  }
}
