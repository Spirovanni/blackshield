import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlackshieldSharedModule } from 'app/shared';
import {
  PointsComponent,
  PointsDetailComponent,
  PointsUpdateComponent,
  PointsDeletePopupComponent,
  PointsDeleteDialogComponent,
  pointsRoute,
  pointsPopupRoute
} from './';

const ENTITY_STATES = [...pointsRoute, ...pointsPopupRoute];

@NgModule({
  imports: [BlackshieldSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [PointsComponent, PointsDetailComponent, PointsUpdateComponent, PointsDeleteDialogComponent, PointsDeletePopupComponent],
  entryComponents: [PointsComponent, PointsUpdateComponent, PointsDeleteDialogComponent, PointsDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlackshieldPointsModule {}
