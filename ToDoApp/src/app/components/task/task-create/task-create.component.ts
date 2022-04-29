import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task: Task = {
    title: '',
    text: '',
    status: false,
  }

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
  }
    createTask(): void{
      this.taskService.create(this.task).subscribe(() =>{
      this.taskService.showMessage('Tarefa adicionada com sucesso!')
      this.router.navigate(['tasks'])
    })

    }
    cancel(): void{
      this.router.navigate(['/tasks'])
    }
}
