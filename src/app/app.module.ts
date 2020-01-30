import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire'
import { AngularFireDatabase } from '@angular/fire/database';
export const firebaseConfig =  {
  apiKey: 'AIzaSyCS55KcK2iYQKbPAQKmWZ2n7Vfank7ZwxM',
  authDomain: 'pepper-a11f2.firebaseapp.com',
  databaseURL: 'https://pepper-a11f2.firebaseio.com',
  projectId: 'pepper-a11f2',
  storageBucket: 'pepper-a11f2.appspot.com',
  messagingSenderId: '990893562965',
  appId: '1:990893562965:web:17e5812aae7fb8329b08dc',
  measurementId: 'G-LHPC81KNEL'
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
