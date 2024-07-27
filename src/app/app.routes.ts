import { Routes } from '@angular/router';

import { routes as userRoutes } from '../app/users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    resolve: {
      userName: resolveUserName,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
