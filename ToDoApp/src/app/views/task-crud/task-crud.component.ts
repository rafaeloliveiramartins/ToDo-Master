import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-crud",
  templateUrl: "./task-crud.component.html",
  styleUrls: ["./task-crud.component.css"],
})
export class TaskCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Nova Tarefa",
      icon: "list_alt",
      routeUrl: "/tasks",
    };
  }

  ngOnInit(): void {}

  navigateToTaskCreate(): void {
    this.router.navigate(["/tasks/create"]);
  }
}
