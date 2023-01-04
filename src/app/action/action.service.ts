import { Injectable } from '@angular/core';
import { Formio, FormioAppConfig } from '@formio/angular';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(public config: FormioAppConfig) { }

  loadActions() {
    (new Formio(this.config.appUrl)).loadActions().then((actions: any[]) => {
      console.log(actions);
    });
  }
}
