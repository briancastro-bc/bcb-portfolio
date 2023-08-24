import {
  Component
} from '@angular/core';
import { NgIf } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

import HomeMobileComponent from './mobile/home.mobile.component';
import HomeDesktopComponent from './desktop/home.desktop.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    NgIf,
    HomeDesktopComponent,
    HomeMobileComponent
  ],
  template: `
    <app-home-desktop
      *ngIf="deviceDetector.isDesktop() || deviceDetector.isTablet()"/>
    <app-home-mobile
      *ngIf="deviceDetector.isMobile()"/>
  `,
})
export default class HomeComponent {
  constructor(readonly deviceDetector: DeviceDetectorService) {}
}

