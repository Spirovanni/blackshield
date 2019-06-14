import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <h1>Hello World!</h1>
    <!--    <ngx-sample-layout>-->
    <!--      <nb-menu [items]="menu"></nb-menu>-->
    <!--      <router-outlet></router-outlet>-->
    <!--    </ngx-sample-layout>-->
  `
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
