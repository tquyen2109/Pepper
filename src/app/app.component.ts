import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFireDatabase,AFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pepper';
  cuisines: Observable<any[]> ;
  restaurant;
  constructor(private af: AngularFireDatabase) {
    
    
  }
  ngOnInit(){
    this.cuisines = this.af.list('cuisines').valueChanges();
    this.restaurant = this.af.object('/restaurant').valueChanges();
  }
 add(){
   this.cuisines.
 }
}
