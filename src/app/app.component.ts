import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj5';
 
  public sendingValue;

 public sendValue(event){
 console.log(event);
 this.sendingValue=event;
 }
}
