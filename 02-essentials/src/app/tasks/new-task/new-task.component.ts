import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData} from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) id!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() createTask = new EventEmitter<TaskData>();
  enterTitle = "";
  enterSummary ="";
  enterDate="";
  private taskService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enterTitle,
      summary: this.enterSummary,
      dueDate: this.enterDate
    }, this.id);
    this.close.emit();
  }
  
}
