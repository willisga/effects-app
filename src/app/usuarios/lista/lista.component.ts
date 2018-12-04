import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../services/usuario.service";
import { Observable } from "rxjs";
import { User } from "src/app/models/usuario.model";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html"
})
export class ListaComponent implements OnInit {
  usuarios: Observable<User[]>;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsers();
  }
}
