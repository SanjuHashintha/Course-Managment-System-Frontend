import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from '../../course/course.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EnrolledStudentComponent } from '../../enrolled-student/enrolled-student.component';
import { HomeComponent } from '../../home/home.component';
import { StudentComponent } from '../../student/student.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'course', component: CourseComponent },
      { path: 'student', component: StudentComponent },
      { path: 'enrolledstudent', component: EnrolledStudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
