import { Action } from '@ngrx/store';
import { UserActionTypes, UserActions } from '../actions';
import { User } from '../interfaces';

export const userFeatureKey = 'user';

export interface State {
  user: User;
  loading: boolean;
  users: User[];
  error: any;
}

export const initialState: State = {
  error: null,
  loading: false,
  user: null,
  users: [],
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state,
        loading: false,
      };
    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case UserActionTypes.CreateUser:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UserActionTypes.CreateUserFailure:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case UserActionTypes.CreateUserSuccess:
      return {
        ...state,
        loading: true,
        user: null,
      };
    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
export const getUser = (state: State) => state.user;
export const getUsers = (state: State) => state.users;
