import { User } from "src/app/models/usuario.model";
import * as fromUsers from "../actions";

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initUsersState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(
  state: UsersState = initUsersState,
  action: fromUsers.UsersActions
): UsersState {
  switch (action.type) {
    case fromUsers.UsersActionsTypes.LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case fromUsers.UsersActionsTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users]
      };

    case fromUsers.UsersActionsTypes.LOAD_USERS_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }
}
