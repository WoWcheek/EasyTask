import { Component, input, output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent],
})
export class TaskComponent {
  task = input.required<Task>();

  complete = output<string>();

  onComplete() {
    this.complete.emit(this.task().id);
  }
}
