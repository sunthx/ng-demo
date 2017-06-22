import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> 绑定事件 </h1>
  <button (click)="click()">点击</button>
  <p>{{title}}</p>
  
  <h1> 使用$event对象获得用户输入 </h1>
  <input (keyup)="onKey($event)">
  <p>result: {{values}}</p>

  <h1> 使用模板变量获得用户输入 </h1>
  <input #box (keyup)="onKey2(box.value)">
  <p>result: {{values2}}</p>

  <h1> demo </h1>
  <input #text
  (keyup.enter)="update(text.value)"
  (blur)="update(text.value);text.value=''"
  >
  <button (click)="update(text.value)">添加</button>
  <ul>
    <li *ngFor="let value of values3">
      {{value}}
    </li>
  </ul>
  `
})
export class AppComponent {
  title = '还没有点击呢。。。';
  values = '';
  values2 = '';
  values3 = ['A', 'B', 'C', 'D'];

  private count: number = 0;

  click(): void {
    this.title = '点击了' + (this.count++) + '次';
  }

  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey2(value: string) {
    this.values2 += value + ' | ';
  }

  update(value: string) {
    if (value) {
      this.values3.push(value);
    }
  }


}
