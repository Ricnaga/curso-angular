import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';

const routes: Routes = [
  {
    path: '', component: ListarContatosComponent
  },
  {
    path: 'novo',
    component: EditarContatoComponent
  },
  {
    path: ':id', component: DetalhesContatosComponent
  },
  {
    path: ':id/editar', component: EditarContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
