import { Component } from '@angular/core';
import { Button01 } from "../ui/button-01/button-01";
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../../services/task';
import { Input01 } from "../ui/input-01/input-01";
import { EditTask } from "./components/edit-task/edit-task";

@Component({
  selector: 'app-task',
  imports: [Button01, MatIconModule, Input01, EditTask],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {

  newTask = { inputTitle: '', inputDescription: '' };

  tasks: TaskDTO[] = [];
  editTaskComponet?: { task: TaskDTO, status: boolean };

  constructor(private taskService: TaskService) {}


  // ===========================================================================================
  ngOnInit(): void {
    this.taskService.getTasks().subscribe({

      next: (response) => {
        this.tasks = response.data as TaskDTO[];
        console.log('GET Tasks OK!\n', response.message);
      },

      error: (err) => {
        console.error(err);
      }
    });
  }

  // ===========================================================================================
  createTask(event?: Event) {
    event?.preventDefault();

    const payload = {
      title: this.newTask.inputTitle,
      description: this.newTask.inputDescription
    };

    this.taskService.createTask(payload).subscribe({

      next: (response) => {
        this.newTask = { inputTitle: '', inputDescription: '' };
        this.tasks.push(response.data.newTask as TaskDTO);

        console.log('Create Task OK!');
      },

      error: (err) => {
        console.error(err);
      }
    });
  }

  // ===========================================================================================
  showEditTaskComponet(task: TaskDTO, status: boolean) {
    this.editTaskComponet = { task: task, status: status };
  }

  // ===========================================================================================
  private updateTask(task: TaskDTO) {

    const payload = {
      title: task.title,
      description: task.description,
      status: task.status
    };

    this.taskService.updateTask(task.id, payload).subscribe({

      next: (response) => {
        const updatedTask = response.data.updatedTask as TaskDTO;
        this.tasks = this.tasks.map((task) => updatedTask.id === task.id ? updatedTask : task );

        console.log('Update Task OK!');
      },

      error: (err) => {
        console.error(err);
      }
    });
  }

  toggleTaskStatus(task: TaskDTO, newStatus: boolean) {
    this.updateTask({ ...task, status: newStatus });
  }

  handleUpdateTask(updatedTaskData: UpdateTaskDTO) {
    if (!this.editTaskComponet) return;

    const updatedTask: TaskDTO = {
      ...this.editTaskComponet.task,
      title: updatedTaskData.title,
      description: updatedTaskData.description
    };

    this.updateTask(updatedTask);
  }

  // ===========================================================================================
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({

      next: (response) => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        console.log('Delete Task OK!', response);
      },

      error: (err) => {
        console.error(err);
      }
    });
  }
}

export interface TaskDTO {
  id: number;
  userId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateTaskDTO {
  title: string;
  description: string;
  stauts?: boolean;
}