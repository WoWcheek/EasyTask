import { input, output, computed, Component } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  isCurrent = input<boolean | undefined>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  select = output<string>();

  onSelect() {
    this.select.emit(this.user().id);
  }
}
