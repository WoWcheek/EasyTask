import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output<void>();
  submit = output<NewTask>();

  enteredDate = signal<string>('');
  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    const newTask: NewTask = {
      date: this.enteredDate(),
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
    };
    this.submit.emit(newTask);
  }
}
