import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { type NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();

  close = output<void>();

  enteredDate = signal<string>('');
  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const newTask: NewTask = {
      date: this.enteredDate(),
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
    };
    this.tasksService.addTask(newTask, this.userId());

    this.close.emit();
  }
}
