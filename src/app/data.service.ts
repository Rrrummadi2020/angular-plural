import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { IStudents } from './models/students';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  STUDENTS: IStudents[] = [
    { id: 1, name: 'Rama', age: 23, address: 'kgPalle', dateOfBirth: '23/11/1998' },
    { id: 2, name: 'Chandra', age: 37, address: 'Brahpalle', dateOfBirth: '03/07/2001' },
    { id: 3, name: 'Mali', age: 23, address: 'Yuguduru', dateOfBirth: '13/04/1898' },
    { id: 4, name: 'Neela', age: 23, address: 'Bugga', dateOfBirth: '28/07/1978' }
  ]
  constructor() { }
  getStudents(): Observable<IStudents[]> {
    return of(this.STUDENTS);
  }
   getStudent(id:number):Observable<IStudents>{
    if(0<id&&id<=this.STUDENTS.length){
      return of(this.STUDENTS[id-1]);
    }
    return of(this.STUDENTS[0]);
  }

}
