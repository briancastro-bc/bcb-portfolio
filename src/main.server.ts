import { ApplicationConfig, ApplicationRef, mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import serverConfiguration from '@configuration/server';
import applicationConfiguration from '@configuration/application'

const bootstrap: () => Promise<ApplicationRef> = () => {
  const configuration: ApplicationConfig = mergeApplicationConfig(
    serverConfiguration,
    applicationConfiguration,
  );

  return bootstrapApplication(
    AppComponent,
    {
      ...configuration
    }
  );
}

export default bootstrap;
