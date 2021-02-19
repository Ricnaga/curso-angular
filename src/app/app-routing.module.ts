import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsLoggedGuard } from './shared/guard/isLogged/is-logged.guard';
import { IsNotLoggedGuard } from './shared/guard/isNotLogged/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'login', component: LoginComponent,
    canActivate: [IsNotLoggedGuard]
  },
  {
    path: 'extrato', component: ExtratoComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'contatos',
    loadChildren: () => import('./contatos/contatos.module')
      .then(m => m.ContatosModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
