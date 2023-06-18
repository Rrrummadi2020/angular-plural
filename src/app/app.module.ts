import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentEditComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule, CommonModule,RouterModule.forRoot(
      [
        { path: '', redirectTo:'/students', pathMatch:'full' },
        { path: 'students', component: StudentListComponent },
        { path: 'students/:id', component: StudentEditComponent }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
