import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';
import { IStudents } from '../models/students';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  name:FormControl;
  age:FormControl;
  street:FormControl;
  pin:FormControl;


  studentForm:FormGroup|undefined;
  address:FormGroup|undefined;
  id:number|undefined;
  student:IStudents|undefined;

  constructor(private route:ActivatedRoute,
    private dataService:DataService){
      this.student = this.route.snapshot.data['data'] ;
      if(this.student){
        this.age = new FormControl(this.student.age,Validators.required);
        this.name = new FormControl(this.student.name,Validators.required);
        this.street = new FormControl(this.student.address.street,Validators.required);
        this.pin = new FormControl(this.student.address.pin,Validators.required);
        this.address = new FormGroup({
          street:this.street,
          pin:this.pin
        })
      }else{
        this.age = new FormControl('',Validators.required);
        this.name = new FormControl('',Validators.required);
        this.pin = new FormControl('',Validators.required);
        this.street = new FormControl('',Validators.required);
        this.address = new FormGroup({
          street:this.street,
          pin:this.pin
        })
      }
    }
  ngOnInit(){
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.dataService.getStudent(this.id).subscribe(res=>this.student = res);
    this.studentForm = new FormGroup({
      name:this.name,
      age:this.age
    })
  }
  onSave(){
    console.log(this.studentForm?.value);
  }
  onEnter(){
    console.log('mouse entered');
  }
  onLeave(){
    console.log('mouse Leaved');
  }
}
