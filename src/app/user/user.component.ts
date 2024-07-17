import {
  input,
  output,
  computed,
  Component,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  id = input.required<string>();
  name = input.required<string>();
  avatar = input.required<string>();

  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelect() {
    this.select.emit(this.id());
  }
}
