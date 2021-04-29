import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Faruq';

  constructor(){
    this.changeName("Ali")
  }

  changeName(name: string): void{
    this.name = name;
  }
}
