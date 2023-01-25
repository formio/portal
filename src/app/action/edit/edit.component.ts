import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormManagerService } from '@formio/angular/manager';
import { Subject, Observable } from 'rxjs';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ActionEditComponent implements AfterViewInit {
  _settingsForm: Subject<any> = new Subject();
  settingsForm: Observable<any> = this._settingsForm.asObservable();
  action: any;
  actionSub: any;
  constructor(
    public actionService: ActionService,
    public managerService: FormManagerService,
    public route: ActivatedRoute
  ) {
    this.actionService.actionInfo.subscribe(async (action: any) => {
      const actionSettings = await this.managerService.formio.makeRequest(`actions/${action.name}`, `${this.managerService.formio.formUrl}/actions/${action.name}`);
      this.actionSub = {data: action};
      this._settingsForm.next(actionSettings.settingsForm);
    });
  }
  ngAfterViewInit(): void {
    this.route.parent.params.subscribe(async (params: any) => {
      this.actionService.loadAction(params.id);
    });
  }
}
