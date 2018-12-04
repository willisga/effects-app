import { User } from "src/app/models/usuario.model";
import * as fromActions from "../actions";

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initUserState: UserState = {
  user: null,
  loading: false,
  loaded: false,
  error: null
};

export function userReducer(
  state: UserState = initUserState,
  action: fromActions.UserActions
): UserState {
  switch (action.type) {
    case fromActions.UserActionType.LOAD_USER:
      return {
        user: null,
        loading: true,
        loaded: false,
        error: null
      };
    case fromActions.UserActionType.LOAD_USER_SUCCESS:
      return {
        user: {
          ...action.payload
        },
        loading: false,
        loaded: true,
        error: null
      };
    case fromActions.UserActionType.LOAD_USER_FAILED:
      return {
        user: null,
        loading: false,
        loaded: true,
        error: {
          url: action.payload.url,
          status: action.payload.status,
          message: action.payload.message
        }
      };
    default:
      return state;
  }
}
