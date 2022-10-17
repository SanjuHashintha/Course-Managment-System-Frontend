import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  id: string;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe((response: any) => {
      this.user = response;
    });
  }

  // public onUpdateStudent(user: User): void {
  //   this.userService.updateUsers(user).subscribe(
  //     (response: User) => {
  //       console.log(response);
  //       this.userService.getUsers();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  onSubmit() {
    this.userService.updateUsers(this.id, this.user).subscribe((response) => {
      console.log(response);
      alert('Updated');
      this.router.navigate(['dashboard/student']);
    });
  }

  onBackClick() {
    this.router.navigate(['dashboard/student']);
  }
}
