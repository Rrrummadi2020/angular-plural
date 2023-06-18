import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
// import { IStudents } from './models/students';

/*
@Injectable({providedIn:'root'})
export class StudentResolver implements Resolve<IStudents>{
  resolve(activatedRouteSnapshot:ActivatedRouteSnapshot,
    routerStateSnapshot:RouterStateSnapshot){

  }
} */
import { ResolveFn,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { IStudents } from './models/students';
import { DataService } from './data.service';
import { inject } from '@angular/core';

export let studentResolver:ResolveFn<Observable<IStudents>>=(route:ActivatedRouteSnapshot,router:RouterStateSnapshot)=>{
  const dataService =  inject(DataService);
  const id = Number(route.paramMap.get('id'));
  return dataService.getStudent(id);
}
