import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserRouteAccessService } from 'app/core';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';

import { AccountService, User, UserService } from 'app/core';

import { ArmoryComponent } from './armory.component';
import { IPoints, Points } from 'app/shared/model/points.model';
import {
  PointsComponent,
  PointsDeletePopupComponent,
  PointsDetailComponent,
  PointsService,
  PointsUpdateComponent
} from 'app/armory/scoreboard/points';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// import {UserMgmtComponent} from "app/admin";
// import { UserMgmtComponent } from './user-management/user-management.component';
// import { UserMgmtDetailComponent } from './user-management/user-management-detail.component';
// import { UserMgmtUpdateComponent } from './user-management/user-management-update.component';
// import { OperationsComponent } from './operations/operations.component';
// import { JhiMetricsMonitoringComponent } from './metrics/metrics.component';
// import { LogsComponent } from './logs/logs.component';
// import { JhiHealthCheckComponent } from './health/health.component';
// import { JhiDocsComponent } from './docs/docs.component';
// import { JhiConfigurationComponent } from './configuration/configuration.component';
// import { AuditsComponent } from './audits/audits.component';

// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

// @Injectable({ providedIn: 'root' })
// export class UserResolve implements CanActivate {
//   constructor(private accountService: AccountService) {}
//
//   canActivate() {
//     return this.accountService.identity().then(account => this.accountService.hasAnyAuthority(['ROLE_ADMIN']));
//   }
// }
//
// @Injectable({ providedIn: 'root' })
// export class UserMgmtResolve implements Resolve<any> {
//   constructor(private service: UserService) {}
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const id = route.params['login'] ? route.params['login'] : null;
//     if (id) {
//       return this.service.find(id);
//     }
//     return new User();
//   }
// }

@Injectable({ providedIn: 'root' })
export class PointsResolve implements Resolve<IPoints> {
  constructor(private service: PointsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPoints> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Points>) => response.ok),
        map((points: HttpResponse<Points>) => points.body)
      );
    }
    return of(new Points());
  }
}

export const armoryRoute: Routes = [
  {
    path: '',
    component: ArmoryComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'blackshieldApp.points.home.title'
    },
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: 'armory',
        component: PointsComponent,
        resolve: {
          pagingParams: JhiResolvePagingParams
        },
        data: {
          authorities: ['ROLE_USER'],
          defaultSort: 'id,asc',
          pageTitle: 'blackshieldApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
      },

      {
        path: 'armory/points/:id/view',
        component: PointsDetailComponent,
        resolve: {
          points: PointsResolve
        },
        data: {
          authorities: ['ROLE_USER'],
          pageTitle: 'blackshieldApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: 'armory/points/new',
        component: PointsUpdateComponent,
        resolve: {
          points: PointsResolve
        },
        data: {
          authorities: ['ROLE_USER'],
          pageTitle: 'blackshieldApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: 'armory/points/:id/edit',
        component: PointsUpdateComponent,
        resolve: {
          points: PointsResolve
        },
        data: {
          authorities: ['ROLE_USER'],
          pageTitle: 'blackshieldApp.points.home.title'
        },
        canActivate: [UserRouteAccessService]
      },

      {
        path: '',
        redirectTo: 'armory',
        pathMatch: 'full'
      },
      {
        // path: '**',
        // component: navbarRoute
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(armoryRoute)],
  exports: [RouterModule]
})
export class ArmoryRoutingModule {}

export const pointsPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: PointsDeletePopupComponent,
    resolve: {
      points: PointsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'blackshieldApp.points.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
