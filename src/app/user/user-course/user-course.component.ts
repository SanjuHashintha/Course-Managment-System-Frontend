import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css'],
})
export class UserCourseComponent implements OnInit {
  public course: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourse();
  }

  public getCourse(): void {
    this.courseService.getCourse().subscribe(
      (response: Course[]) => {
        this.course = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
