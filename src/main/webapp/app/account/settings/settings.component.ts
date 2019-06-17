import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiLanguageService } from 'ng-jhipster';

import { NbMediaBreakpoint, NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { AccountService, JhiLanguageHelper, LoginModalService } from 'app/core';
import { Account } from 'app/core/user/account.model';
import { StateService } from 'app/shared/@core/utils';
import { delay, takeWhile, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'jhi-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['settings.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  account: Account;
  modalRef: NgbModalRef;
  error: string;
  success: string;
  languages: any[];
  settingsForm = this.fb.group({
    firstName: [undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    lastName: [undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    email: [undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    activated: [false],
    authorities: [[]],
    langKey: ['en'],
    login: [],
    imageUrl: []
  });
  subMenu: NbMenuItem[] = [
    {
      title: 'PAGE LEVEL MENU',
      group: true
    },
    {
      title: 'Buttons',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/buttons'
    },
    {
      title: 'Grid',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/grid'
    },
    {
      title: 'Icons',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/icons'
    },
    {
      title: 'Modals',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/modals'
    },
    {
      title: 'Typography',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/typography'
    },
    {
      title: 'Animated Searches',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/search-fields'
    },
    {
      title: 'Tabs',
      icon: 'ion ion-android-radio-button-off',
      link: '/pages/ui-features/tabs'
    }
  ];
  layout: any = {};
  sidebar: any = {};

  private alive = true;

  currentTheme: string;

  constructor(
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager,
    private accountService: AccountService,
    private fb: FormBuilder,
    private languageService: JhiLanguageService,
    private languageHelper: JhiLanguageHelper,
    protected stateService: StateService,
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService
  ) {
    this.stateService
      .onLayoutState()
      .pipe(takeWhile(() => this.alive))
      .subscribe((layout: string) => (this.layout = layout));

    this.stateService
      .onSidebarState()
      .pipe(takeWhile(() => this.alive))
      .subscribe((sidebar: string) => {
        this.sidebar = sidebar;
      });

    const isBp = this.bpService.getByName('is');
    this.menuService
      .onItemSelect()
      .pipe(
        takeWhile(() => this.alive),
        withLatestFrom(this.themeService.onMediaQueryChange()),
        delay(20)
      )
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {
        if (bpTo.width <= isBp.width) {
          this.sidebarService.collapse('menu-sidebar');
        }
      });

    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.accountService.identity().then(account => {
      this.updateForm(account);
    });
    this.languageHelper.getAll().then(languages => {
      this.languages = languages;
    });
  }

  save() {
    const settingsAccount = this.accountFromForm();
    this.accountService.save(settingsAccount).subscribe(
      () => {
        this.error = null;
        this.success = 'OK';
        this.accountService.identity(true).then(account => {
          this.updateForm(account);
        });
        this.languageService.getCurrent().then(current => {
          if (settingsAccount.langKey !== current) {
            this.languageService.changeLanguage(settingsAccount.langKey);
          }
        });
      },
      () => {
        this.success = null;
        this.error = 'ERROR';
      }
    );
  }

  private accountFromForm(): any {
    const account = {};
    return {
      ...account,
      firstName: this.settingsForm.get('firstName').value,
      lastName: this.settingsForm.get('lastName').value,
      email: this.settingsForm.get('email').value,
      activated: this.settingsForm.get('activated').value,
      authorities: this.settingsForm.get('authorities').value,
      langKey: this.settingsForm.get('langKey').value,
      login: this.settingsForm.get('login').value,
      imageUrl: this.settingsForm.get('imageUrl').value
    };
  }

  updateForm(account: any): void {
    this.settingsForm.patchValue({
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      activated: account.activated,
      authorities: account.authorities,
      langKey: account.langKey,
      login: account.login,
      imageUrl: account.imageUrl
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
