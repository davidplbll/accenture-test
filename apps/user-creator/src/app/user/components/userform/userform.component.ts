import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interfaces';
import * as moment from 'moment';
import { LoadUsers, CreateUser } from '../../actions';
import { getLoading, getUsers } from '../../reducers';
import { State } from '../../reducers/user.reducer';
import { Store, select } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'accenture-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  userForm = this.fb.group({
    birthdate: [null, Validators.required],
    firstname: ['', Validators.required],
    identification: [null, Validators.required],
    lastname: ['', Validators.required],
  });
  users = new Set([]);
  users$ = this.store.pipe(
    select(getUsers),
    tap(console.log),
    map(
      (users: User[]) =>
        new Set(users.map((user) => Number(user?.identification)))
    )
  );
  loading$ = this.store.pipe(select(getLoading));
  maxDate = moment().subtract(18, 'years').toDate();
  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.users$.subscribe((res) => {
      console.log('res ', res);
      this.users = res;
    });
    this.store.dispatch(new LoadUsers());
    this.userForm.valueChanges.subscribe((res) => {
      console.log('res ', res);
    });
  }

  validateIdentification() {
    return this.userForm.value?.identification
      ? this.users.has(this.userForm.value?.identification)
      : false;
  }

  save() {
    this.store.dispatch(new CreateUser(this.userForm.value));
  }
}
