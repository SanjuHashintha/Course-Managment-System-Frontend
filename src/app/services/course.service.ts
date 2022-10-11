import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private API_PATH = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.API_PATH}/course`);
  }

  public addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.API_PATH}/course/add`, course);
  }

  public updateCourse(id: string, course: Course): Observable<Course> {
    return this.http.put<Course>(
      `${this.API_PATH}/course/update/` + id,
      course
    );
  }

  public deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_PATH}/course/delete/${id}`);
  }

  public getCourseById(id: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.API_PATH}/course/${id}`);
  }
}
