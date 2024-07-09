import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>('/api/v2/employees');
  }

  getDepartments() : Observable<string[]> {
    return this.http.get<string[]>('/api/v2/departments');
  }
}
