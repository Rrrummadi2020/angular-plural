import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { IStudents } from './models/students';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
   getStudents(): Observable<IStudents[]> {
    return of(this.STUDENTS);
  }

  STUDENTS: IStudents[] = [
    { id: 1, name: 'Rama', age: 23, address: 'kgPalle', dateOfBirth: '23/11/1998' },
    { id: 1, name: 'Chandra', age: 37, address: 'Brahpalle', dateOfBirth: '03/07/2001' },
    { id: 1, name: 'Mali', age: 23, address: 'Yuguduru', dateOfBirth: '13/04/1898' },
    { id: 1, name: 'Neela', age: 23, address: 'Bugga', dateOfBirth: '28/07/1978' }
  ]
}
