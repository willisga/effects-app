import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/usuario.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private url = "https://reqres.in/api";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.url}/users?per_page=6`)
      .pipe(map(response => response["data"]));
  }

  getUser(idUser: number): Observable<User> {
    return this.http
      .get<User>(`${this.url}/users/${idUser}`)
      .pipe(map(response => response["data"]));
  }
}
