import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
constructor(private dataservice:DataService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.dataservice.getEvents().subscribe(res=>console.log(res));
}
}
