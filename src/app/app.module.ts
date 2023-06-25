import { studentResolver } from './student.resolve';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CommonModule } from '@angular/common';
import { studentGuard } from './student.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { UnlessDirective } from './practice/directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentEditComponent,
    StudentListComponent,
    PracticeComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule, CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forRoot(
      [
        { path: '', redirectTo:'/students', pathMatch:'full' },
        { path: 'students', component: StudentListComponent },
        { path: 'students/:id', component: StudentEditComponent, canActivate:[studentGuard],resolve:{data:studentResolver} },
        { path: 'practice', component: PracticeComponent },
        { path: '**', pathMatch:'full', redirectTo:'/students'}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
