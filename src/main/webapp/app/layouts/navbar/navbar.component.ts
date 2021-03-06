import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiLanguageService } from 'ng-jhipster';
import { SessionStorageService } from 'ngx-webstorage';

import { VERSION } from 'app/app.constants';
import { JhiLanguageHelper, AccountService, LoginModalService, LoginService, Account } from 'app/core';
import { ProfileService } from 'app/layouts/profiles/profile.service';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../shared/@core/data/users';
import { AnalyticsService } from '../../shared/@core/utils';
import { LayoutService } from '../../shared/@core/utils';

@Component({
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.scss']
})
export class NavbarComponent implements OnInit {
  @Input() position = 'normal';

  user: any;
  account: Account;
  userMenu = [
    // { title: 'Profile', url: '/pages/iot-dashboard', icon: 'fa fa-fw fa-user' },
    // { title: 'Users', url: '/admin/user-management/admin/edit', icon: 'fa fa-fw fa-dashboard' },
    { title: 'Settings', link: 'settings', icon: 'fa fa-fw fa-wrench' },
    { title: 'Password', link: 'password', icon: 'fa fa-fw fa-clock-o' },
    { title: 'Register', link: 'register', icon: 'fa fa-fw fa-user-plus' },
    { title: 'Admin', link: 'admin/user-management', icon: 'fa fa-fw fa-folder' }
  ];

  items = [{ title: 'Profile' }, { title: 'Logout' }];

  inProduction: boolean;
  isNavbarCollapsed: boolean;
  languages: any[];
  swaggerEnabled: boolean;
  modalRef: NgbModalRef;
  version: string;

  constructor(
    private loginService: LoginService,
    private languageService: JhiLanguageService,
    private languageHelper: JhiLanguageHelper,
    private sessionStorage: SessionStorageService,
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private profileService: ProfileService,
    private router: Router,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserData,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private nbMenuService: NbMenuService
  ) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
  }

  ngOnInit() {
    this.languageHelper.getAll().then(languages => {
      this.languages = languages;
    });

    this.profileService.getProfileInfo().then(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });

    this.userService.getUsers().subscribe((users: any) => (this.user = users.nick));
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
  }

  changeLanguage(languageKey: string) {
    this.sessionStorage.store('locale', languageKey);
    this.languageService.changeLanguage(languageKey);
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }

  logout() {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  getImageUrl() {
    return this.isAuthenticated() ? this.accountService.getImageUrl() : null;
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
