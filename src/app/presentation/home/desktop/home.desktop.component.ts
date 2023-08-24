import {
  Component
} from '@angular/core';

import ButtonComponent from '../../shared/button/button.component';

@Component({
  standalone: true,
  selector: 'app-home-desktop',
  imports: [
    ButtonComponent
  ],
  templateUrl: './home.desktop.component.html',
  styleUrls: ['./home.desktop.component.scss']
})
export default class HomeDesktopComponent {}
