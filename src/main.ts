import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import applicationConfiguration from '@configuration/application';

bootstrapApplication(
  AppComponent,
  applicationConfiguration
).catch((err) => console.error(err));
