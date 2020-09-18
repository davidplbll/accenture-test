import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  CreateUser,
  LoadUsers,
  UserActions,
  CreateUserFailure,
  CreateUserSuccess,
  LoadUsersFailure,
  LoadUsersSuccess,
  UserActionTypes,
} from '../actions';
import { UserService } from '../services';
import sweetalert2 from 'sweetalert2';

@Injectable()
export class UserEffects {
  @Effect()
  LoadUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    switchMap(() =>
      this.userService.getUsers().pipe(
        map((users) => new LoadUsersSuccess(users)),
        catchError((err) => of(new LoadUsersFailure(err)))
      )
    )
  );

  @Effect({ dispatch: false })
  LoadUsersFailure$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsersFailure),
    tap(() =>
      sweetalert2({
        type: 'error',
        title: 'Error',
        confirmButtonText: 'Cerrar',
        text: 'Error al consutar clientes',
      })
    )
  );
  @Effect()
  CreateUser$ = this.actions$.pipe(
    ofType(UserActionTypes.CreateUser),
    map((action: CreateUser) => action.payload),
    switchMap((user) =>
      this.userService.createUsers(user).pipe(
        map((userResponse) => new CreateUserSuccess(userResponse)),
        catchError((err) => of(new CreateUserFailure(err)))
      )
    )
  );

  @Effect({ dispatch: false })
  CreateUserFailure$ = this.actions$.pipe(
    ofType(UserActionTypes.CreateUserFailure),
    tap(() =>
      sweetalert2({
        type: 'error',
        title: 'Error',
        confirmButtonText: 'Cerrar',
        text: 'Error al crear cliente',
      })
    )
  );
  @Effect({ dispatch: false })
  CreateUserSuccess$ = this.actions$.pipe(
    ofType(UserActionTypes.CreateUserSuccess),
    tap(() =>
      sweetalert2({
        type: 'success',
        title: 'Cliente creado con exito',
        confirmButtonText: 'Cerrar',
        text: 'Se han registrado con exito sus datos',
      })
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
