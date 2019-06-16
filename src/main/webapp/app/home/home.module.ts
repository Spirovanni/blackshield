import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlackshieldSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { ThemeModulex } from '../shared';

@NgModule({
  imports: [BlackshieldSharedModule, ThemeModulex, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlackshieldHomeModule {}
