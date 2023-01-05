import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formio } from '@formio/angular';
import { FormManagerService } from '@formio/angular/manager';
import { Subject, Observable } from 'rxjs';

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
    public managerService: FormManagerService,
    public route: ActivatedRoute
  ) {}
  ngAfterViewInit(): void {
    this.route.parent.params.subscribe(async (params: any) => {
      const actionUrl = `${this.managerService.formio.formUrl}/action/${params.id}`;
      this.action = await (new Formio(actionUrl)).loadAction();
      const actionSettings = await this.managerService.formio.makeRequest(`actions/${this.action.name}`, `${this.managerService.formio.formUrl}/actions/${this.action.name}`);
      this.actionSub = {data: this.action};
      this._settingsForm.next(actionSettings.settingsForm);
    });
  }
}
