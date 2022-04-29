import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { TaskService } from "./../task.service";
import { Task } from "../task.model";
import { HeaderService } from "../../template/header/header.service";

@Component({
  selector: "app-task-check",
  templateUrl: "./task-check.component.html",
  styleUrls: ["./task-check.component.css"],
})
export class TaskCheckComponent implements OnInit {
  tasks: Task[];
  displayedColumns = ["title", "text", "status", "editar","apagar","marcar"];


  constructor(
    private taskService: TaskService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: " Tarefas Concluídas",
      icon: "check_box",
      routeUrl: "/tasks",
    };
  }

  Tarefapendente(id: Number) {
    this.taskService.pendente(id).subscribe((erro) => {
      console.log(erro);
    });
  }

  ngOnInit(): void {
    this.taskService.check().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
