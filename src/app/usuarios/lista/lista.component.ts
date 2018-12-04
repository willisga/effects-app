import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../services/usuario.service";
import { Observable } from "rxjs";
import { User } from "src/app/models/usuario.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import * as fromActions from "../../store/actions/";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html"
})
export class ListaComponent implements OnInit {
  usuarios: User[];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>, private route: Router) {}

  ngOnInit() {
    this.store.dispatch(new fromActions.LoadUsers());

    this.store.select("users").subscribe(userState => {
      this.usuarios = userState.users;
      this.loading = userState.loading;
      this.error = userState.error;
    });
  }

  getDetail(idUser: number) {
    this.route.navigate(["/usuario", idUser]);
  }
}
