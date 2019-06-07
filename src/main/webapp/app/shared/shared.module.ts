import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlackshieldSharedLibsModule, BlackshieldSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BlackshieldSharedLibsModule, BlackshieldSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BlackshieldSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlackshieldSharedModule {
  static forRoot() {
    return {
      ngModule: BlackshieldSharedModule
    };
  }
}
