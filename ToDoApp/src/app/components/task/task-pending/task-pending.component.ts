import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "../../template/header/header.service";
import { Task } from "../task.model";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-pending",
  templateUrl: "./task-pending.component.html",
  styleUrls: ["./task-pending.component.css"],
})
export class TaskPendingComponent implements OnInit {
  tasks: Task[];
  displayedColumns = ["title", "text", "status", "editar","apagar","marcar"]; //'date'

  constructor(
    private taskService: TaskService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: " Tarefas Pendentes",
      icon: "check_box_outline_blank",
      routeUrl: "/tasks",
    };
  }

  concluiTarefa(id: Number) {
    this.taskService.concluir(id).subscribe((erro) => {
      console.log(erro);
    });
  }

  ngOnInit(): void {
    this.taskService.read().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
