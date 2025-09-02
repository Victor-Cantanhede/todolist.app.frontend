import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modal01 } from "../../../ui/modal-01/modal-01";
import { Input01 } from "../../../ui/input-01/input-01";
import { Button01 } from "../../../ui/button-01/button-01";
import { MatIconModule } from "@angular/material/icon";
import { TaskDTO, UpdateTaskDTO } from '../../task';

@Component({
  selector: 'app-edit-task',
  imports: [Modal01, Input01, Button01, MatIconModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css'
})

export class EditTask {

  @Input() taskData!: TaskDTO;
  newTaskData!: UpdateTaskDTO;

  @Output() updateTask = new EventEmitter<UpdateTaskDTO>();
  @Output() closeModal = new EventEmitter<void>();


  ngOnInit(): void {
    this.newTaskData = {
      title: this.taskData.title,
      description: this.taskData.description
    };
  }

  emitUpdateTask(): void {
    this.updateTask.emit(this.newTaskData);
    this.closeModal.emit();
  }

  emitCloseModal(): void {
    this.closeModal.emit();
  }
}
