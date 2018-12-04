import { Injectable } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";
import { Effect, Actions } from "@ngrx/effects";

import * as fromAction from "../actions";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService: UsuarioService) {}

  @Effect()
  loadUser$ = this.action$.ofType(fromAction.UserActionType.LOAD_USER).pipe(
    switchMap(action => {
      return this.userService.getUser(action["idUser"]).pipe(
        map(user => new fromAction.LoadUserSuccess(user)),
        catchError(error => of(new fromAction.LoadUserFailed(error)))
      );
    })
  );
}
