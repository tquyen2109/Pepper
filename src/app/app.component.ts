import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pepper';
  cuisines: AngularFireList<any[]> ;
  restaurant;
  constructor(private af: AngularFireDatabase) {
    
    }
    
  
  ngOnInit(){
    this.af.list('/cuisines').valueChanges().subscribe((cuisines:any)=>{
      this.cuisines = cuisines;
    });
    this.restaurant = this.af.object('/restaurant').valueChanges();
  }
 add(){
   this.af.list('/cuisines').push('Asian');
 }

}
