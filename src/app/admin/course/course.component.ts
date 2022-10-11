import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCourseComponent } from 'src/app/dialogBox/add-course/add-course.component';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  public course: Course[];

  constructor(
    private courseService: CourseService,
    private matDialog: MatDialog,
    private router: Router
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

  public onDeleteCourse(userId: string): void {
    this.courseService.deleteCourse(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.courseService.getCourse();
        window.location.reload();
      },
      (HttpErrorResponse) => {
        alert('Course Deleted');
        window.location.reload();
      }
    );
  }

  onOpenDialog() {
    this.matDialog.open(AddCourseComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '30%',
    });
  }

  updateCourse(id: string) {
    this.router.navigate(['updatecourse', id]);
  }
}
