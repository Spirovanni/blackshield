import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          loadChildren: './admin/admin.module#BlackshieldAdminModule'
        },
        { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
        {
          path: 'auth',
          component: NbAuthComponent,
          children: [
            {
              path: '',
              component: NbLoginComponent
            },
            {
              path: 'login',
              component: NbLoginComponent
            },
            {
              path: 'register',
              component: NbRegisterComponent
            },
            {
              path: 'logout',
              component: NbLogoutComponent
            },
            {
              path: 'request-password',
              component: NbRequestPasswordComponent
            },
            {
              path: 'reset-password',
              component: NbResetPasswordComponent
            }
          ]
        },
        { path: '', redirectTo: 'pages', pathMatch: 'full' },

        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class BlackshieldAppRoutingModule {}
