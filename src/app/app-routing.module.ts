import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
