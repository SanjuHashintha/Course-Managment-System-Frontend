import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private matDialogRef: MatDialogRef<AddCourseComponent>
  ) {}

  ngOnInit(): void {}

  public onAddCourse(addForm: NgForm): void {
    this.courseService.addCourse(addForm.value).subscribe(
      (response: Course) => {
        console.log(response);
        this.courseService.getCourse();
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
