import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContatosComponent } from './shared/components/contatos/contatos.component';
import { DetalhesContatosComponent } from './shared/components/contatos/detalhes-contatos/detalhes-contatos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'extrato', component: ExtratoComponent
  },
  {
    path: 'contatos', component: ContatosComponent
  },
  {
    path: 'contatos/:id', component: DetalhesContatosComponent
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
