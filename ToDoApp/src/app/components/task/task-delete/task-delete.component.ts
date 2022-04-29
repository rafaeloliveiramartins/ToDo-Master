import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';


@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  task: Task;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.readById(id).subscribe((task) => {
      this.task = task;
    });
  }
  deleteTask(): void {
    this.taskService.delete(this.task.id).subscribe(() => {
      this.taskService.showMessage("Tarefa excluido com sucesso!");
      this.router.navigate(["/tasks"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/tasks"]);
  }
}
