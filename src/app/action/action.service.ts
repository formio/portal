import { Injectable } from '@angular/core';
import { Formio } from 'formiojs';
import { FormioAppConfig } from '@formio/angular';
import { FormManagerService } from '@formio/angular/manager';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ActionService {
  action: any;
  actionFormio: any;
  _actionInfo: Subject<any> = new Subject();
  actionInfo: Observable<any> = this._actionInfo.asObservable();
  constructor(
    public managerService: FormManagerService,
    public config: FormioAppConfig
  ) { }

  async loadAction(actionId: string) {
    const actionUrl = `${this.managerService.formio.formUrl}/action/${actionId}`;
    this.actionFormio = new Formio(actionUrl);
    this.action = await this.actionFormio.loadAction();
    this._actionInfo.next(this.action);
    return this.action;
  }

  loadActions() {
    (new Formio(this.config.appUrl)).loadActions().then((actions: any[]) => {
      console.log(actions);
    });
  }
}
