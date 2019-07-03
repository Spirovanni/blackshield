import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserRouteAccessService } from 'app/core';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';

import { AccountService, User, UserService } from 'app/core';

import { AdminComponent } from './admin.component';
import { UserMgmtComponent } from './user-management/user-management.component';
import { UserMgmtDetailComponent } from 'app/admin/user-management/user-management-detail.component';
import { UserMgmtUpdateComponent } from 'app/admin/user-management/user-management-update.component';
import { OperationsComponent } from './operations/operations.component';
import { JhiMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';

// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

@Injectable({ providedIn: 'root' })
export class UserResolve implements CanActivate {
  constructor(private accountService: AccountService) {}

  canActivate() {
    return this.accountService.identity().then(account => this.accountService.hasAnyAuthority(['ROLE_ADMIN']));
  }
}

@Injectable({ providedIn: 'root' })
export class UserMgmtResolve implements Resolve<any> {
  constructor(private service: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['login'] ? route.params['login'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new User();
  }
}

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      authorities: ['ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: 'user-management',
        component: UserMgmtComponent,
        resolve: {
          pagingParams: JhiResolvePagingParams
        },
        data: {
          pageTitle: 'userManagement.home.title',
          defaultSort: 'id,asc'
        }
      },
      {
        path: 'user-management/:login/view',
        component: UserMgmtDetailComponent,
        resolve: {
          user: UserMgmtResolve
        },
        data: {
          pageTitle: 'userManagement.home.title'
        }
      },
      {
        path: 'user-management/new',
        component: UserMgmtUpdateComponent,
        resolve: {
          user: UserMgmtResolve
        },
        data: {
          pageTitle: 'userManagement.home.createLabel'
        }
      },
      {
        path: 'user-management/:login/edit',
        component: UserMgmtUpdateComponent,
        resolve: {
          user: UserMgmtResolve
        },
        data: {
          pageTitle: 'userManagement.home.createOrEditLabel'
        }
      },
      {
        path: 'operations',
        component: OperationsComponent,
        resolve: {
          user: UserMgmtResolve
        }
      },
      {
        path: 'jhi-metrics',
        component: JhiMetricsMonitoringComponent,
        data: {
          pageTitle: 'metrics.title'
        }
      },
      // {
      //   path: 'iot-dashboard',
      //   component: DashboardComponent
      // },
      // {
      //   path: 'ui-features',
      //   loadChildren: './ui-features/ui-features.module#UiFeaturesModule'
      // },
      // {
      //   path: 'modal-overlays',
      //   loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule'
      // },
      // {
      //   path: 'extra-components',
      //   loadChildren: './extra-components/extra-components.module#ExtraComponentModule'
      // },
      // {
      //   path: 'bootstrap',
      //   loadChildren: './bootstrap/bootstrap.module#BootstrapModule'
      // },
      // {
      //   path: 'maps',
      //   loadChildren: './maps/maps.module#MapsModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './charts/charts.module#ChartsModule'
      // },
      // {
      //   path: 'editors',
      //   loadChildren: './editors/editors.module#EditorsModule'
      // },
      // {
      //   path: 'forms',
      //   loadChildren: './forms/forms.module#FormsModule'
      // },
      // {
      //   path: 'tables',
      //   loadChildren: './tables/tables.module#TablesModule'
      // },
      // {
      //   path: 'miscellaneous',
      //   loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule'
      // },
      {
        path: '',
        redirectTo: 'user-management',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
