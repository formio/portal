import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioGrid } from '@formio/angular/grid';
import { FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerConfig } from '@formio/angular/manager';
import { FormIndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { FormConfigService } from './form.config.service';

const managerRoutes: Routes = FormManagerRoutes({
  formIndex: FormIndexComponent,
  form: FormComponent
});

managerRoutes[2].children.push({
  path: 'action',
  loadChildren: () => import('src/app/action/action.module').then(m => m.ActionModule)
});

@NgModule({
  declarations: [
    FormIndexComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormioGrid,
    FormManagerModule,
    RouterModule.forChild(managerRoutes)
  ],
  providers: [
    FormManagerService,
    {provide: FormManagerConfig, useClass: FormConfigService}
  ]
})
export class FormModule { }
