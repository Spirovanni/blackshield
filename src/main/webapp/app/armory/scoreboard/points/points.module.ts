// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { JhiLanguageService } from 'ng-jhipster';
// import { JhiLanguageHelper } from 'app/core';
//
// import { BlackshieldSharedModule } from 'app/shared';
// import {
//   PointsComponent,
//   PointsDetailComponent,
//   PointsUpdateComponent,
//   PointsDeletePopupComponent,
//   PointsDeleteDialogComponent,
//   pointsRoute,
//   pointsPopupRoute
// } from './';
//
// const ENTITY_STATES = [...pointsRoute, ...pointsPopupRoute];
//
// @NgModule({
//   imports: [BlackshieldSharedModule, RouterModule.forChild(ENTITY_STATES)],
//   declarations: [PointsComponent, PointsDetailComponent, PointsUpdateComponent, PointsDeleteDialogComponent, PointsDeletePopupComponent],
//   entryComponents: [PointsComponent, PointsUpdateComponent, PointsDeleteDialogComponent, PointsDeletePopupComponent],
//   providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class BlackshieldPointsModule {
//   constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
//     this.languageHelper.language.subscribe((languageKey: string) => {
//       if (languageKey !== undefined) {
//         this.languageService.changeLanguage(languageKey);
//       }
//     });
//   }
// }
