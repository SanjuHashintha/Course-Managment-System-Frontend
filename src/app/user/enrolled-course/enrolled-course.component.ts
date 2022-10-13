import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css'],
})
export class EnrolledCourseComponent implements OnInit {
  public enrollments: Enrollment[];
  data: any;

  constructor(
    private enrollmentService: EnrollmentService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    // this.getEnrolledCourse();
    this.getEnrolledCourseByUsername(this.userAuthService.getUsername() || '');
  }

  // public getEnrolledCourse(): void {
  //   const username = this.userAuthService.getUsername();
  //   this.enrollmentService.getEnrolledCourse().subscribe(
  //     (response: Enrollment[]) => {
  //       this.enrollments = response.filter(
  //         (enrollment) => enrollment.username == username
  //       );
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public getEnrollmentById(userId: string): void {
    this.enrollmentService.getEnrollmentById(userId).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  public getEnrolledCourseByUsername(username: string): void {
    this.enrollmentService.getEnrollmentByUsername(username).subscribe(
      (response: Enrollment[]) => {
        this.enrollments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
