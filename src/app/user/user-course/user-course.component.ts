import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/models/course';
import { Enrollment } from 'src/app/models/enrollment';
import { CourseService } from 'src/app/services/course.service';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css'],
})
export class UserCourseComponent implements OnInit {
  public course: Course[];
  public enrollment: Enrollment[];

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private userAuthService: UserAuthService
  ) {}

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

  onAddEnrollment(course: Course): void {
    var newEnrollement: Enrollment = {
      id: '',
      username: this.userAuthService.getUsername() || '',
      courseCode: course.courseCode,
    };
    this.enrollmentService.addEnrolledCourse(newEnrollement).subscribe(
      (response: Enrollment) => {
        console.log(response);
        this.enrollmentService.getEnrolledCourse();
        // addForm.reset();
        //window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
