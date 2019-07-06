import { Component } from '@angular/core';

import { MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['admin.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu">
        <h1>Let's Roll!</h1>
      </nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `
})
export class AdminComponent {
  menu = MENU_ITEMS;
}
