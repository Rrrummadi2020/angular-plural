import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from "./student-list/student-list.component";
import { studentResolver } from "./student.resolve";
import { studentGuard } from "./student.guard";
import { PracticeComponent } from "./practice/practice.component";
import { StudentEditComponent } from "./student-edit/student-edit.component";

const ROUTES: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentEditComponent, canActivate: [studentGuard], resolve: { data: studentResolver } },
  { path: 'practice', component: PracticeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/students' }
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
