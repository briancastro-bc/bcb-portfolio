import {
  Component
} from '@angular/core';
import { NgIf } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

import NavbarDesktopComponent from './desktop/navbar.desktop.component';
import NavbarMobileComponent from './mobile/navbar.mobile.component';

@Component({
  standalone: true,
  selector: 'navbar',
  imports: [
    NgIf,
    NavbarDesktopComponent,
    NavbarMobileComponent
  ],
  template: `
    <navbar-desktop
      *ngIf="deviceDetector.isDesktop() || deviceDetector.isTablet()"/>
    <navbar-mobile
      *ngIf="deviceDetector.isMobile()"/>
  `,
})
export class NavbarComponent {
  constructor(readonly deviceDetector: DeviceDetectorService) {}
}
