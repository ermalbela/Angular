import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";


@Injectable({
  providedIn: 'root',

})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: {title: string, description: string}){
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    };
    this.tasks.update((prevTasks) => [...prevTasks, newTask]);
  }

  updateTaskStatus(id: string, newStatus: TaskStatus){
    this.tasks.update((prevTasks) => prevTasks.map((task) => task.id === id ? {...task, status: newStatus}: task));
  }
}