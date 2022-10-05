import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public user: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
