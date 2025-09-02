import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000';
  public userRoute = `${this.apiUrl}/users`;
  public taskRoute = `${this.apiUrl}/tasks`;

  constructor(public http: HttpClient) {}
}
