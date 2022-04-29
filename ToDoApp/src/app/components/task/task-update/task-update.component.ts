import { Task } from "./../task.model";
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.taskService.readById(id).subscribe((task) => {
      this.task = task;
    });
  }
  updateTask(): void {
    this.taskService.update(this.task).subscribe(() => {
      this.taskService.showMessage("Tarefa atualizada com sucesso!");
      this.router.navigate(["/tasks"]);
    });

  }

  nstatus(selectedRecord: Task) {
    this.taskService.task = Object.assign({}, selectedRecord);
  }

  cancel(): void {
    this.router.navigate(["/tasks"]);
  }
}
