import { Action } from '@ngrx/store';
import { User } from '../interfaces';
export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
  CreateUser = '[User] Create User',
  CreateUserSuccess = '[User] Create User Success',
  CreateUserFailure = '[User] Create User Failure',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: User[]) {}
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: any) {}
}
export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;
  constructor(public payload: User) {}
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;
  constructor(public payload: User) {}
}

export class CreateUserFailure implements Action {
  readonly type = UserActionTypes.CreateUserFailure;
  constructor(public payload: any) {}
}

export type UserActions =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFailure
  | CreateUser
  | CreateUserSuccess
  | CreateUserFailure;
