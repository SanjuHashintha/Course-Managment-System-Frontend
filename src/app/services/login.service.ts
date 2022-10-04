import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_PATH = "http://localhost:8080";

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(private httpclient: HttpClient) { }

  public login(loginData:any){
    return this.httpclient.post(this.API_PATH + "/api/auth/login", loginData, {headers: this.requestHeader})
  }
}
