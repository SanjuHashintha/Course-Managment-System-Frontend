import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCourseComponent } from './dialogBox/update-course/update-course.component';
import { UpdateStudentComponent } from './dialogBox/update-student/update-student.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'userdashboard',
    loadChildren: () =>
      import('./user/modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'updatecourse/:id', component: UpdateCourseComponent },
  { path: 'updateuser/:id', component: UpdateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
