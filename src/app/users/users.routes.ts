import { type Routes } from '@angular/router';

import { TasksService } from '../tasks/tasks.service';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TasksComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
      },
    ],
  },
];
