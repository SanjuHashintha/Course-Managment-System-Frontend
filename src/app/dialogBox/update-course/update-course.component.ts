import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  id: string;
  course: Course;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe((response: any) => {
      this.course = response;
    });
  }

  onSubmit() {
    this.courseService
      .updateCourse(this.id, this.course)
      .subscribe((response) => {
        console.log(response);

        alert('Updated');
        this.router.navigate(['dashboard/course']);
      });
  }

  onBackClick() {
    this.router.navigate(['dashboard/course']);
  }
}
