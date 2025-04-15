import { Injectable } from "@angular/core";
import { NewTaskModel } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
  private taskData = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor(){
    const taskData = localStorage.getItem('tasks');

    if(taskData){
      this.taskData = JSON.parse(taskData);
    }
  }

  getUserTasks(userId: string){
    return this.taskData.filter(task => task.userId === userId);
  }

  addTask(taskData: NewTaskModel, userId: string){
    this.taskData.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string){
    this.taskData = this.taskData.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.taskData));
  }

}