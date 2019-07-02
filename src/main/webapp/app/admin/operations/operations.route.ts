import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';

import { AccountService, User, UserService } from 'app/core';
import { OperationsComponent } from './operations.component';
import { OperationsDetailComponent } from './operations-detail.component';
import { OperationsUpdateComponent } from './operations-update.component';

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

export const operationsRoute: Routes = [
  {
    path: 'operations',
    component: OperationsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      pageTitle: 'userManagement.home.title',
      defaultSort: 'id,asc'
    }
  },
  {
    path: 'operations/:login/view',
    component: OperationsDetailComponent,
    resolve: {
      user: UserMgmtResolve
    },
    data: {
      pageTitle: 'userManagement.home.title'
    }
  },
  {
    path: 'user-management/new',
    component: OperationsUpdateComponent,
    resolve: {
      user: UserMgmtResolve
    }
  },
  {
    path: 'user-management/:login/edit',
    component: OperationsUpdateComponent,
    resolve: {
      user: UserMgmtResolve
    }
  }
];
