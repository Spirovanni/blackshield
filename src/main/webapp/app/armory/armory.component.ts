import { Component } from '@angular/core';

import { MENU_ITEMS } from './armory-menu';

@Component({
  selector: 'jhi-armory',
  styleUrls: ['armory.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu">
        <h1>Let's Roll!</h1>
      </nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `
})
export class ArmoryComponent {
  menu = MENU_ITEMS;
}
