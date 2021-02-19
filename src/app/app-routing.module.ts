import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContatosComponent } from './shared/components/contatos/contatos.component';
import { DetalhesContatosComponent } from './shared/components/contatos/detalhes-contatos/detalhes-contatos.component';
import { IsLoggedGuard } from './shared/guard/isLogged/is-logged.guard';
import { IsNotLoggedGuard } from './shared/guard/isNotLogged/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
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
    path: 'contatos', component: ContatosComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'contatos/:id', component: DetalhesContatosComponent,
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
