import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormManagerService } from '@formio/angular/manager';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class ActionCreateComponent implements AfterViewInit {
  _settingsForm: Subject<any> = new Subject();
  settingsForm: Observable<any> = this._settingsForm.asObservable();
  constructor(public managerService: FormManagerService, public route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.route.params.subscribe(async (params: any) => {
      const actionSettings = await this.managerService.formio.makeRequest(`actions/${params.name}`, `${this.managerService.formio.formUrl}/actions/${params.name}`);
      this._settingsForm.next(actionSettings.settingsForm);
    });
  }
}
