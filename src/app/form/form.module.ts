import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioGrid } from '@formio/angular/grid';
import { FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerConfig } from '@formio/angular/manager';
import { FormIndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    FormIndexComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormioGrid,
    FormManagerModule,
    RouterModule.forChild(FormManagerRoutes({
      formIndex: FormIndexComponent,
      form: FormComponent
    }))
  ],
  providers: [
    FormManagerService,
    {provide: FormManagerConfig, useValue: {
      includeSearch: true,
      type: 'form'
    }}
  ]
})
export class FormModule { }
