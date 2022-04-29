import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Task } from "./task.model";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  baseUrl = "http://localhost:5000/api/ToDo";
  task: Task;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  check(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tarefasConcluidas`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  update(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url, task).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  delete(id: number): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Task>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); 
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  concluir(id: Number) {
    const url = `${this.baseUrl}/concluirTarefa/${id}`;
    return this.http.put<Task>(url, id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  pendente(id: Number) {
    const url = `${this.baseUrl}/deixarPendente/${id}`;
    return this.http.put<Task>(url, id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

}
