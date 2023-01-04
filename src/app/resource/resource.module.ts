import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioGrid } from '@formio/angular/grid';
import { FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerConfig } from '@formio/angular/manager';
import { ResourceIndexComponent } from './index/index.component';
import { ResourceFormComponent } from './form/form.component';

const managerRoutes: Routes = FormManagerRoutes({
  formIndex: ResourceIndexComponent,
  form: ResourceFormComponent
});

managerRoutes[2].children.push({
  path: 'action',
  loadChildren: () => import('src/app/action/action.module').then(m => m.ActionModule)
});

@NgModule({
  declarations: [
    ResourceIndexComponent,
    ResourceFormComponent
  ],
  imports: [
    CommonModule,
    FormioGrid,
    FormManagerModule,
    RouterModule.forChild(managerRoutes)
  ],
  providers: [
    FormManagerService,
    {provide: FormManagerConfig, useValue: {
      includeSearch: true,
      type: 'resource'
    }}
  ]
})
export class ResourceModule { }
