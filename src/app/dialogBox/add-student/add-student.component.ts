import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor(
    private userService: UserService,
    private matDialogRef: MatDialogRef<AddStudentComponent>
  ) {}

  ngOnInit(): void {}

  public onAddStudent(addForm: NgForm): void {
    this.userService.addUsers(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.userService.getUsers();
        addForm.reset();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onCLoseClick() {
    this.matDialogRef.close();
  }
}
