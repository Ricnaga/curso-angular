import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalhesContatosComponent,
    EditarContatoComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatosModule { }
