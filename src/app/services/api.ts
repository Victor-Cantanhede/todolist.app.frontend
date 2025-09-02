import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  public userRoute = `${this.apiUrl}/users`;
  public taskRoute = `${this.apiUrl}/tasks`;

  constructor(public http: HttpClient) {}
}
