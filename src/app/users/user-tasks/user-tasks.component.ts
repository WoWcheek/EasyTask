import { Component, computed, inject, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userId = input.required<string>();
  private userService = inject(UsersService);
  userName = computed(
    () => this.userService.users.find((x) => x.id === this.userId())?.name
  );
}
