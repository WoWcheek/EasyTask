import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  imports: [FormsModule, RouterLink],
})
export class NewTaskComponent {
  userId = input.required<string>();
  private router = inject(Router);
  private tasksService = inject(TasksService);
  enteredDate = signal('');
  enteredTitle = signal('');
  enteredSummary = signal('');

  onSubmit() {
    this.tasksService.addTask(
      {
        date: this.enteredDate(),
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
      },
      this.userId()
    );
    this.router.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true,
    });
  }
}
