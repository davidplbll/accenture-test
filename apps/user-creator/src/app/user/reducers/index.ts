import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserReducer from './user.reducer';

const UserStateSelector = createFeatureSelector<fromUserReducer.State>(
  fromUserReducer.userFeatureKey
);

export const getError = createSelector(
  UserStateSelector,
  fromUserReducer.getError
);
export const getLoading = createSelector(
  UserStateSelector,
  fromUserReducer.getLoading
);
export const getUser = createSelector(
  UserStateSelector,
  fromUserReducer.getUser
);
export const getUsers = createSelector(
  UserStateSelector,
  fromUserReducer.getUsers
);
