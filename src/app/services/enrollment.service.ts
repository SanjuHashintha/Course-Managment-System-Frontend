import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enrollment } from '../models/enrollment';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private API_PATH = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getEnrolledCourse(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.API_PATH}/enrollment`);
  }

  public addEnrolledCourse(enrollment: Enrollment): Observable<Enrollment> {
    console.log(enrollment);
    return this.http.post<Enrollment>(
      `${this.API_PATH}/enrollment/add`,
      enrollment
    );
  }

  public getEnrollmentById(id: string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.API_PATH}/enrollment/${id}`);
  }
}
