import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { ExtraComponentModule } from './extra-components/extra-components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModulex } from '../shared';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModulex,
    DashboardModule,
    ECommerceModule,
    ExtraComponentModule
    // MiscellaneousModule,
  ],
  declarations: [...PAGES_COMPONENTS]
})
export class PagesModule {}
