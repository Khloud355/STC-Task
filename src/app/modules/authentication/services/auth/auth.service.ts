import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

import { RulesService } from '../rule/rules.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUsers = [{
    username: 'admin',
    password: 'admin',
    rules: ['admin']
  },
  {
    username: 'user',
    password: 'user',
    rules: ['user']
  }]
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) { }

  checkAuthUsers(loggedUser: User) {
    return this.authUsers.some(user =>
      (user.username == loggedUser.username) && (user.password == loggedUser.password))
  }

  user(): User | null {
    console.log(this.user$.value)
    return this.user$.value
  }

  isLoggedIn() {
    return this.user$.value ? true : false
  }

  // formData {
  // username:'amr',
  // password:234,
  // rules:[]
  // }

  check(userData: User | null): { user: User, isFound: boolean } {
    let isFound = false;
    let foundUser: User = { username: '', password: '' }

    this.authUsers.forEach(user => {
      if (user.username == userData?.username && user.password && userData.password) {
        foundUser = user;
        isFound = true
      }
    })
    return {
      user: foundUser,
      isFound
    }
  }

  handleAppRoute() {
    let foundUser: { user: User, isFound: boolean } = this.check(this.user())
    if (foundUser.isFound) {
      if (foundUser.user.rules?.includes('admin')) {
        this.router.navigate(['/products/admin-view'])
      }
      else if (foundUser.user.rules?.includes('user')) {
        this.router.navigate(['/products/user-view'])
      }
    }
  }

  login(user: User) {
    console.log(user)
    if (this.checkAuthUsers(user)) {
      console.log("if")
      this.user$.next(user)
      localStorage.setItem("user", JSON.stringify(user));
      this.handleAppRoute()
    } else {
      // this.sncackBar.show("you wrote wtrong")
      return;
    }
  }

  autoLogin() {
    console.log("ll")
    let localStorageUser: any = localStorage.getItem("user")
    const user: User = JSON.parse(localStorageUser)
    if (localStorageUser) {
      this.user$.next(user)
    } else {
      this.router.navigate(['/login'])
      return;
    }
  }

  logout() {
    this.user$.next(null)
    localStorage.removeItem("user")
    this.router.navigate(['/login'])

  }
}
