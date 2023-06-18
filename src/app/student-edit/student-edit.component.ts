import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';
import { IStudents } from '../models/students';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  id:number|undefined;
  student:IStudents|undefined;
  constructor(private route:ActivatedRoute,
    private dataService:DataService){}
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getStudent(this.id).subscribe(res=>this.student = res);
  }
}
