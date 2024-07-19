import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  task = input.required<Task>();

  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
  }
}
