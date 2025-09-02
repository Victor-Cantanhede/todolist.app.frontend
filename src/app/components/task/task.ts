import { Component } from '@angular/core';
import { Button01 } from "../ui/button-01/button-01";
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../../services/task';
import { Input01 } from "../ui/input-01/input-01";

@Component({
  selector: 'app-task',
  imports: [Button01, MatIconModule, Input01],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {

  tasks: TaskDTO[] = [];
  newTask = { inputTitle: '', inputDescription: '' };
  editTaskComponet!: { task: TaskDTO, status: boolean };

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
  showEditTaskComponet(task: TaskDTO) {
    console.log(this.editTaskComponet);
    console.log(task);
  }

  // ===========================================================================================
  updateTask(task: TaskDTO) {

    const payload = {
      title: task.title,
      description: task.description,
      status: task.status
    };

    this.taskService.updateTask(task.id, payload).subscribe({

      next: (response) => {
        const updatedTask = response.data.updatedTask as TaskDTO;

        this.tasks = this.tasks.map((task) => updatedTask.id === task.id
          ? { ...task, status: updatedTask.status }
          : { ...task });

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