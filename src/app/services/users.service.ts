import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getProfesores() {
    const users = JSON.stringify(localStorage.getItem('users')) as unknown as User[];
    if (users) {
      return users.filter(user => user.role === 'profesor');
    }
  }

  getUsers(): Observable<User[]> {
    const users = JSON.parse(localStorage.getItem('users')) as unknown as User[];
    if (users) {
      return of(users);
    }
    return of([] as User[]);
  }
}
