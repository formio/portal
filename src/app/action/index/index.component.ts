import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormManagerService } from '@formio/angular/manager';
import { Observable } from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class ActionIndexComponent implements AfterViewInit {
  selectedAction: string = '';
  availableActions: Observable<Array<any>> = new Observable();
  actions: Observable<Array<any>> = new Observable();
  constructor(public managerService: FormManagerService, public router: Router, public route: ActivatedRoute) {
  }

  ngAfterViewInit() {
    console.log(this.managerService);
    this.availableActions = this.managerService.formio.makeRequest('actions', `${this.managerService.formio.formUrl}/actions`);
    this.actions = this.managerService.formio.loadActions();
  }

  createAction() {
    console.log(this.selectedAction);
    this.router.navigate(['create', this.selectedAction], { relativeTo: this.route })
  }
}
