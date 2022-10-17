import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css'],
})
export class DeleteCourseComponent implements OnInit {
  public course: Course[];
  constructor(
    private courseService: CourseService,
    private matDialogRef: MatDialogRef<DeleteCourseComponent>
  ) {}

  ngOnInit(): void {}

  // public onDeleteCourse(userId: string): void {
  //   this.courseService.deleteCourse(userId).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.courseService.getCourse();
  //       window.location.reload();
  //     },
  //     (HttpErrorResponse) => {
  //       alert('Course Deleted');
  //       window.location.reload();
  //     }
  //   );
  // }

  // onDeleteCLoseClick() {
  //   this.matDialogRef.close();
  // }
}
