import { Action } from "@ngrx/store";
import { User } from "src/app/models/usuario.model";

export enum UsersActionsTypes {
  LOAD_USERS = "[Users] Cargar Usuarios",
  LOAD_USERS_FAILED = "[Users] Carga Usuarios Fallida",
  LOAD_USERS_SUCCESS = "[Users] Carga Usuario Satisfactoria"
}

export class LoadUsers implements Action {
  readonly type = UsersActionsTypes.LOAD_USERS;
}

export class LoadUsersFailed implements Action {
  readonly type = UsersActionsTypes.LOAD_USERS_FAILED;
  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionsTypes.LOAD_USERS_SUCCESS;
  constructor(public users: User[]) {}
}

export type UsersActions = LoadUsers | LoadUsersFailed | LoadUsersSuccess;
