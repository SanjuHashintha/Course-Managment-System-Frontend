import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { HeaderComponent } from './admin/header/header.component';
import { HomeComponent } from './admin/home/home.component';
import { StudentComponent } from './admin/student/student.component';
import { CourseComponent } from './admin/course/course.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ForbiddenComponent } from './admin/forbidden/forbidden.component';
import { AddStudentComponent } from './dialogBox/add-student/add-student.component';
import { UpdateStudentComponent } from './dialogBox/update-student/update-student.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserSidenavComponent } from './user/user-sidenav/user-sidenav.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserStudentComponent } from './user/user-student/user-student.component';
import { UserCourseComponent } from './user/user-course/user-course.component';
import { AddCourseComponent } from './dialogBox/add-course/add-course.component';
import { UpdateCourseComponent } from './dialogBox/update-course/update-course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    StudentComponent,
    CourseComponent,
    ForbiddenComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    UserDashboardComponent,
    UserHomeComponent,
    UserSidenavComponent,
    UserHeaderComponent,
    UserStudentComponent,
    UserCourseComponent,
    AddCourseComponent,
    UpdateCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    LoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
