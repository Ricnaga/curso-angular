import { Injectable } from '@angular/core';
import { User } from '../../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User
  token: string

  constructor() { }

  setUser(user: User) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    if (this.user) {
      return this.user
    }

    const userSaved = localStorage.getItem('user')
    if (userSaved) {
      this.user = JSON.parse(userSaved)
      return this.user
    }

    return null;
  }

  setToken(token: string) {
    this.token = token
    localStorage.setItem('token', token)
  }

  getToken() {
    if (this.token) {
      return this.token
    }

    const tokenSaved = localStorage.getItem('token')
    if (tokenSaved) {
      this.token = tokenSaved
      return this.token
    }

    return null;
  }

  isLogged(): boolean {
    if (this.getUser() && this.getToken()) {
      return true
    }

    return false
  }
}
