import { Component } from '@angular/core';
import { FormioAuthComponent } from '@formio/angular/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent extends FormioAuthComponent {}
