import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioAlerts } from '@formio/angular';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class ActionDeleteComponent {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public alerts: FormioAlerts,
    public actionService: ActionService
  ) {}

  onDelete() {
    this.actionService.actionFormio.deleteAction().then(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    }).catch(err => this.alerts.setAlert({type: 'danger', message: (err.message || err)}));
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
