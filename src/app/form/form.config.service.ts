import { Injectable } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FormManagerConfig } from '@formio/angular/manager';

@Injectable()
export class FormConfigService extends FormManagerConfig {
  public override type: string;
  constructor(public route: ActivatedRoute) {
    super();
    this.includeSearch = true;
    this.type = this.route.children.length ? this.route.children[0].routeConfig.path : 'form';
  }
}
