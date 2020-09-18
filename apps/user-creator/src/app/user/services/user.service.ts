import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { User } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<Object>(environment.urlApi)
      .pipe(map((data) => Object.keys(data).map((key) => data[key])));
  }
  createUsers(user: User): Observable<User> {
    return this.http.post<User>(environment.urlApi, user);
  }
}
