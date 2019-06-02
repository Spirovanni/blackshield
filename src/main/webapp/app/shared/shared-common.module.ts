import { NgModule } from '@angular/core';

import { BlackshieldSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BlackshieldSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BlackshieldSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BlackshieldSharedCommonModule {}
