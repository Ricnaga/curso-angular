import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalhesContatosComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
