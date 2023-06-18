import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IStudents } from '../models/students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students: IStudents[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStudents().subscribe((res) => { this.students = res });
  }
}
