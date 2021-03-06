import './vendor.ts';

import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { BlackshieldSharedModule, ThemeModulex } from 'app/shared';
import { BlackshieldCoreModule } from 'app/core';
import { BlackshieldAppRoutingModule } from './app-routing.module';
import { BlackshieldHomeModule } from './home/home.module';
import { BlackshieldAccountModule } from './account/account.module';
import { BlackshieldEntityModule } from './entities/entity.module';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ActiveMenuDirective, ErrorComponent } from './layouts';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { DragulaModule } from 'ng2-dragula';
import { CoreModule } from './shared';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
    NgJhipsterModule.forRoot({
      // set below to true to make alerts look like toast
      alertAsToast: false,
      alertTimeout: 5000,
      i18nEnabled: true,
      defaultI18nLang: 'en'
    }),
    NgbModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModulex.forRoot(),
    StoreModule.forRoot({}),
    DragulaModule.forRoot(),
    BlackshieldSharedModule.forRoot(),
    BlackshieldCoreModule,
    BlackshieldHomeModule,
    NgxEchartsModule,
    BlackshieldAccountModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BlackshieldEntityModule,
    BlackshieldAppRoutingModule,
    ThemeModulex,
    NbAuthModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  exports: [ActiveMenuDirective, NavbarComponent],
  bootstrap: [JhiMainComponent]
})
export class BlackshieldAppModule {
  constructor(private dpConfig: NgbDatepickerConfig) {
    this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
  }
}
