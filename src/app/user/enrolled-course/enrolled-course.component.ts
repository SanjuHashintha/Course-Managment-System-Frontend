import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css'],
})
export class EnrolledCourseComponent implements OnInit {
  public enrollments: Enrollment[];
  data: any;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.getEnrolledCourse();
  }

  public getEnrolledCourse(): void {
    this.enrollmentService.getEnrolledCourse().subscribe(
      (response: Enrollment[]) => {
        this.enrollments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getEnrollmentById(userId: string): void {
    this.enrollmentService.getEnrollmentById(userId).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
