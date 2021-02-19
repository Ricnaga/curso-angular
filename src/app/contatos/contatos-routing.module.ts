import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';

const routes: Routes = [
  {
    path: '', component: ListarContatosComponent
  },
  {
    path: ':id', component: DetalhesContatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
