import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-enrolled-student',
  templateUrl: './enrolled-student.component.html',
  styleUrls: ['./enrolled-student.component.css'],
})
export class EnrolledStudentComponent implements OnInit {
  public enrollments: Enrollment[];

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
}
