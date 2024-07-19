import { Component, signal } from '@angular/core';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  currentUserId = signal<string | undefined>(undefined);

  get currentUser() {
    return this.users.find((x) => x.id === this.currentUserId())!;
  }

  onSelectUser(id: string) {
    this.currentUserId.set(id);
  }
}
