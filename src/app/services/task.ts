import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Injectable } from '@angular/core';
import { TaskDTO, UpdateTaskDTO } from '../components/task/task';


@Injectable({
  providedIn: 'root'
})

export class TaskService extends ApiService {

  // ===========================================================================================
  getTasks(): Observable<any> {
    return this.http.get(`${this.taskRoute}/get-all`, { withCredentials: true });
  }

  // ===========================================================================================
  createTask(payload: { title: string, description: string }): Observable<any> {
    return this.http.post(`${this.taskRoute}/create`, payload, { withCredentials: true });
  }

  // ===========================================================================================
  updateTask(taskId: number, payload: UpdateTaskDTO): Observable<any> {
    return this.http.put(`${this.taskRoute}/update/${taskId}`, payload, { withCredentials: true });
  }

  // ===========================================================================================
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.taskRoute}/delete/${taskId}`, { withCredentials: true });
  }
}
