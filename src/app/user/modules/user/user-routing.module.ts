import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrolledCourseComponent } from '../../enrolled-course/enrolled-course.component';
import { UserCourseComponent } from '../../user-course/user-course.component';
import { UserDashboardComponent } from '../../user-dashboard/user-dashboard.component';
import { UserHomeComponent } from '../../user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: 'userhome', component: UserHomeComponent },
      { path: 'usercourse', component: UserCourseComponent },
      { path: 'enrolledcourse', component: EnrolledCourseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
