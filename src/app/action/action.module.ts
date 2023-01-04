import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActionIndexComponent } from './index/index.component';
import { ActionRoutes } from './action.routing';
import { ActionCreateComponent } from './create/create.component';
import { ActionEditComponent } from './edit/edit.component';
import { ActionViewComponent } from './view/view.component';
import { ActionDeleteComponent } from './delete/delete.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  declarations: [
    ActionIndexComponent,
    ActionCreateComponent,
    ActionEditComponent,
    ActionViewComponent,
    ActionDeleteComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ActionRoutes)
  ],
  exports: [RouterModule]
})
export class ActionModule { }
