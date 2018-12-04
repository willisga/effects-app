import { Action } from "@ngrx/store";
import { User } from "src/app/models/usuario.model";

export enum UserActionType {
  LOAD_USER = "[User] Cargando Usuario",
  LOAD_USER_SUCCESS = "[User] Carga de Usuario Satisfactorio",
  LOAD_USER_FAILED = "[User] Carga de Usuario Fallido"
}

export class LoadUser implements Action {
  readonly type = UserActionType.LOAD_USER;
  constructor(public idUser: number) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionType.LOAD_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class LoadUserFailed implements Action {
  readonly type = UserActionType.LOAD_USER_FAILED;
  constructor(public payload: any) {}
}

export type UserActions = LoadUser | LoadUserSuccess | LoadUserFailed;
