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
import { ActionService } from './action.service';
import { UtilsModule } from '../utils/utils.module';

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
    UtilsModule,
    RouterModule.forChild(ActionRoutes)
  ],
  exports: [RouterModule],
  providers: [ActionService]
})
export class ActionModule { }
