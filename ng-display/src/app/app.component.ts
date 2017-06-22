import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
  <p>* 使用 插值表达式 显示组件数据</p>
  <p>{{title}}</p>
  <p>{{description}}</p>

  <p>* 使用 *ngFor 显示数组型数据</p>
  <p>Times:</p>
  <ul>
    <li *ngFor="let time of times">
      {{time}}
    </li>
  </ul>

  <p>* 使用 *ngIf 按条件显示</p>
  <p *ngIf="times.length > 3">这么多条时间信息！！！</p>
  `
})
export class AppComponent {
  title = 'ng-display-data';
  description='使用插值表达式显示组件属性';
  times=['2017年6月22日17:12:41','2017年6月22日17:12:47','2017年6月22日17:12:51','2017年6月22日17:12:58']
}
