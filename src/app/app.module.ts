import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Formio, FormioAppConfig } from '@formio/angular';
import { FormioResources } from '@formio/angular/resource';
import { ResourceFieldsComponent } from './components/ResourceFieldsComponent';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import 'jquery';
import 'bootstrap';

Formio.use({
  components: {
    resourcefields: ResourceFieldsComponent
  }
});

import { AppConfig } from './config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule
  ],
  providers: [
    { provide: FormioAppConfig, useValue: AppConfig },
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
