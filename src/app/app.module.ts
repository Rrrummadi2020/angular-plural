import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { UnlessDirective } from './practice/directive/unless.directive';
import { BetterHighlightDirective } from './practice/directive/better-highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentEditComponent,
    StudentListComponent,
    PracticeComponent,
    UnlessDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule, CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,UserModule,ProductsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
