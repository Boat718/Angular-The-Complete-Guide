import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name?:string ;
  @Input({required:true}) id!:string;
  isAddingTask = false;

  constructor(private tasksService:TaskService) {

  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.id);
  }


  onStartAddTask() {
    this.isAddingTask = true
  }

  onCloseAddTask() {
    this.isAddingTask = false
  }

}
