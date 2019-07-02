import { NbMenuItem } from '@nebular/theme';

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
      },
      {
        title: 'User Details',
        link: '/admin/user-management/admin/view'
      },
      {
        title: 'Edit User',
        link: '/admin/user-management/admin/edit'
      }
    ]
  }
];
