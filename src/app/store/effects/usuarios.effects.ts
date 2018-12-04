import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromActions from "../actions";
import { UsuarioService } from "../../services/usuario.service";
import { of } from "rxjs";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) {}

  @Effect()
  loadUsers$ = this.actions$
    .ofType(fromActions.UsersActionsTypes.LOAD_USERS)
    .pipe(
      // Procesa el observable actual obteniendo el resultado, lo cancela y retorna un nuevo observable
      switchMap(actionLoadUser => {
        return this.usuariosService.getUsers().pipe(
          map(users => new fromActions.LoadUsersSuccess(users)),
          catchError(error => of(new fromActions.LoadUsersFailed(error)))
        );
      })
    );
}
