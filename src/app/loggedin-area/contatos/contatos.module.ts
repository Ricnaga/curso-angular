import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalhesContatosComponent,
    NovoContatoComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatosModule { }
