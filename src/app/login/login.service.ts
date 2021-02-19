import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../shared/interface/login.interface';
import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService
  ) { }

  doLogin(email: string, senha: string):Observable<LoginResponse> {
    // return this.http.post(this.API_URL+ '/auth', contato, this.httpOptions)

    if (email === 'email@email.com' && senha === '123') {
      return of({
        user: {
          nome: 'ricardo',
          sobrenome: 'naga',
          email: 'email@email.com',
        },
        token: 'umtoken'
      })
        .pipe(
          tap(response => {
            this.authService.setUser(response.user)
            this.authService.setToken(response.token)
          })
        )
    }

    throwError('Usuário ou senha incorretos')
  }
}
