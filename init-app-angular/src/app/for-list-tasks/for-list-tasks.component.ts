import { Component } from '@angular/core';

@Component({
  selector: 'app-for-list-tasks',
  standalone: true,
  imports: [],
  templateUrl: './for-list-tasks.component.html',
  styleUrl: './for-list-tasks.component.css'
})
export class ForListTasksComponent {
  tasks: string[] = [];

  constructor() {
    this.tasks.push('Study JS');
    this.tasks.push('Study Angular');
    this.tasks.push('Study React');
  }
  addTask(newTask: string): void {
    this.tasks.push(newTask);
  }
}
