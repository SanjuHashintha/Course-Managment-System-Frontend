import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.loginService.login(loginForm.value).subscribe(
      (response: any) => {
        console.log('login response-----:', response);
        this.userAuthService.setRoles(response.roles);
        this.userAuthService.setToken(response.token);
        this.userAuthService.setUsername(response.username);

        const role = response.roles[0];

        if (role === 'ADMIN') {
          this.router.navigate(['/dashboard/home']);
        } else {
          this.router.navigate(['/userdashboard/userhome']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
