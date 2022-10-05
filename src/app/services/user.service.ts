import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private API_PATH = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_PATH}/user`);
  }
  
  public addUsers(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_PATH}/user/add`, user);
  }

  public updateUsers(user: User): Observable<User> {
    return this.http.put<User>(`${this.API_PATH}/user/update`, user);
  }

  public deleteUsers(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_PATH}/user/delete${id}`);
  }
}
