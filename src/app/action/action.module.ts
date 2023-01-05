import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
import { ActionIndexComponent } from './index/index.component';
import { ActionRoutes } from './action.routing';
import { ActionCreateComponent } from './create/create.component';
import { ActionEditComponent } from './edit/edit.component';
import { ActionDeleteComponent } from './delete/delete.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  declarations: [
    ActionIndexComponent,
    ActionCreateComponent,
    ActionEditComponent,
    ActionDeleteComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormioModule,
    RouterModule.forChild(ActionRoutes)
  ],
  exports: [RouterModule]
})
export class ActionModule { }
