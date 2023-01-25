import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormManagerService } from '@formio/angular/manager';
import { Subject, Observable } from 'rxjs';
import { ToasterService } from 'src/app/utils/toaster.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class ActionCreateComponent implements AfterViewInit {
  _settingsForm: Subject<any> = new Subject();
  settingsForm: Observable<any> = this._settingsForm.asObservable();
  _actionDefaults: Subject<any> = new Subject();
  actionDefaults: Observable<any> = this._actionDefaults.asObservable();
  actionSettings: any;
  constructor(public managerService: FormManagerService, public route: ActivatedRoute, public router: Router, public toaster: ToasterService) {}
  ngAfterViewInit(): void {
    this.route.params.subscribe(async (params: any) => {
      this.actionSettings = await this.managerService.formio.makeRequest(`actions/${params.name}`, `${this.managerService.formio.formUrl}/actions/${params.name}`);
      this._settingsForm.next(this.actionSettings.settingsForm);
      this._actionDefaults.next({data: this.actionSettings.defaults });
    });
  }

  onSubmit() {
    this.toaster.toast('Action has been created!');
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
