import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <hero-form></hero-form>
  `
})
export class AppComponent {
  title = 'it works!';
}
