import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Formio } from '@formio/angular';
import { FormManagerService } from '@formio/angular/manager';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  _settingsForm: Subject<any> = new Subject();
  settingsForm: Observable<any> = this._settingsForm.asObservable();
  action: any;
  actionSub: any;
  constructor(
    public actionService: ActionService,
    public managerService: FormManagerService,
    public route: ActivatedRoute
  ) {}
  ngAfterViewInit(): void {
    this.route.params.subscribe(async (params: any) => {
      await this.actionService.loadAction(params.id);
      const actionSettings = await this.managerService.formio.makeRequest(`actions/${this.action.name}`, `${this.managerService.formio.formUrl}/actions/${this.action.name}`);
      this.actionSub = {data: this.action};
      this._settingsForm.next(actionSettings.settingsForm);
    });
  }
}
