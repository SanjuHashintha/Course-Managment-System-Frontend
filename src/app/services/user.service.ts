import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_PATH = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_PATH}/user`);
  }

  public addUsers(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_PATH}/user/add`, user);
  }

  public updateUsers(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.API_PATH}/user/update/` + id, user);
  }

  public deleteUsers(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_PATH}/user/delete/${id}`);
  }

  public getUserById(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_PATH}/user/${id}`);
  }
}
