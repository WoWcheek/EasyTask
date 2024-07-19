import { Component, inject, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { type NewTask } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  userId = input.required<string>();
  userName = input.required<string>();

  isAddingTask = signal<boolean>(false);

  private tasksService = inject(TasksService);

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(newTask: NewTask) {
    this.tasksService.addTask(newTask, this.userId());
    this.isAddingTask.set(false);
  }
}
