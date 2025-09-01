import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) {}

  // ===========================================================================================
  authUser(payload: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, payload);
  }

  // ===========================================================================================
  createUser(payload: { name: string, username: string, password: string }) {
    return this.http.post(`${this.apiUrl}/create`, payload);
  }
}
