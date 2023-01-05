import { Routes } from '@angular/router';
import { ActionIndexComponent } from './index/index.component';
import { ActionCreateComponent } from './create/create.component';
import { ActionComponent } from './action/action.component';
import { ActionEditComponent } from './edit/edit.component';
import { ActionDeleteComponent } from './delete/delete.component';

const ActionRoutes: Routes = [
    {
        path: '',
        component: ActionIndexComponent
    },
    {
        path: 'create/:name',
        component: ActionCreateComponent
    },
    {
        path: ':id',
        component: ActionComponent,
        children: [
            {
                path: '',
                redirectTo: 'edit',
                pathMatch: 'full'
            },
            {
                path: 'edit',
                component: ActionEditComponent
            },
            {
                path: 'delete',
                component: ActionDeleteComponent
            }
        ]
    }
];

export { ActionRoutes };