import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    const userSaved = localStorage.getItem('user')
    if (userSaved) {
      return JSON.parse(userSaved)
    }

    return null;
  }
}
