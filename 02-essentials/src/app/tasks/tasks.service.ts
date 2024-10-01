import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { TaskData } from "./task/task.model";


@Injectable({providedIn: 'root'})
export class TaskService {
  // Implement the TaskService class methods here
  private tasks = dummyTasks

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }


  getUserTasks(id: string) {
    return this.tasks.filter(task => task.userId === id);
  }

  addTask(taskData: TaskData, id: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: id!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    })
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id!== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}