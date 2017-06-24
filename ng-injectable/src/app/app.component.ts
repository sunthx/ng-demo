import { Component } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  template:`
  hello DI !
  <h1>users</h1>
  <ul>
    <li *ngFor="let hero of heros">
    {{hero.id}} - {{hero.name}}
    </li>
  </ul>
  `,
  providers:[UserService]
})
export class AppComponent {
  title = 'app';
  heros = [];
  constructor(userService:UserService){
    this.heros = userService.getHeros();
  }
}
