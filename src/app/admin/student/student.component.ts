import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddStudentComponent } from '../../dialogBox/add-student/add-student.component';
import { UpdateStudentComponent } from '../../dialogBox/update-student/update-student.component';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  public user: User[];

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteStudent(userId: string): void {
    if (confirm('Are you sure want to delete student?')) {
      this.userService.deleteUsers(userId).subscribe(
        (response: void) => {
          console.log(response);
          this.userService.getUsers();
          window.location.reload();
        },
        (HttpErrorResponse) => {
          alert('User Deleted');
          window.location.reload();
        }
      );
    }
  }

  onOpenDialog() {
    this.matDialog.open(AddStudentComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '30%',
    });
  }

  // onOpenEditDialog(userId) {
  //   console.log('########### this.user : ', this.user);
  //   console.log('########### user id: ', userId);

  //   this.userService.getUserById(userId).subscribe(
  //     (response: User[]) => {
  //       this.user = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );

  //   this.matDialog.open(UpdateStudentComponent, { data: this.user });
  // }

  updateUser(id: string) {
    this.router.navigate(['updateuser', id]);
  }
}
