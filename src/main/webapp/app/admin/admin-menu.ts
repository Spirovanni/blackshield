import { NbMenuItem } from '@nebular/theme';
import { UserRouteAccessService } from 'app/core';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';

import { AccountService, User, UserService } from 'app/core';

import { AdminComponent } from './admin.component';
import { UserMgmtComponent } from './user-management/user-management.component';
import { UserMgmtDetailComponent } from 'app/admin/user-management/user-management-detail.component';
import { UserMgmtUpdateComponent } from 'app/admin/user-management/user-management-update.component';
import { OperationsComponent } from './operations/operations.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserMgmtResolve } from 'app/admin/user-management/user-management.route';

@Injectable({ providedIn: 'root' })
export class UzerResolve implements CanActivate {
  constructor(private accountService: AccountService) {}

  canActivate() {
    return this.accountService.identity().then(account => this.accountService.hasAnyAuthority(['ROLE_ADMIN']));
  }
}

@Injectable({ providedIn: 'root' })
export class UserMmtResolve implements Resolve<any> {
  constructor(private service: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['login'] ? route.params['login'] : null;
    if (id) {
      return this.service.find(id);
    }
    return new User();
  }
}

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard'
  },
  {
    title: 'Operations',
    icon: 'nb-locked',
    link: '/admin/operations'
  },
  {
    title: 'SYSTEM DASHBOARD',
    group: true
  },
  {
    title: 'User Management',
    icon: 'nb-person',
    children: [
      {
        title: 'Users List',
        link: '/admin/user-management'
      },
      {
        title: 'Create New User',
        link: '/admin/user-management/new'
      }
    ]
  },
  {
    title: 'Systems Management',
    icon: 'nb-gear',
    children: [
      {
        title: 'Metrics',
        link: '/admin/jhi-metrics'
      },
      {
        title: 'Logs',
        link: '/admin/logs'
      },
      {
        title: 'Health',
        link: '/admin/jhi-health'
      },
      {
        title: 'Docs',
        link: '/admin/docs'
      },
      {
        title: 'Configuration',
        link: '/admin/jhi-configuration'
      }
    ]
  }
];
