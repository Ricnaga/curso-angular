import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataBindingExecComponent } from './components/data-binding-exec/data-binding-exec.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ExerciseExplainedComponent } from './components/exercise-explained/exercise-explained.component';
import { ExecDiretivasComponent } from './components/exec-diretivas/exec-diretivas.component';
import { MemesComponent } from '../memes/memes.component';
import { DiretivaNgclassComponent } from '../diretiva-ngclass/diretiva-ngclass.component';
import { PipeExecComponent } from './components/pipe-exec/pipe-exec.component';
import { RouterModule } from '@angular/router';
import { ContatosComponent } from './components/contatos/contatos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DataBindingExecComponent,
    ContadorComponent,
    ExerciseExplainedComponent,
    ExecDiretivasComponent,
    MemesComponent,
    DiretivaNgclassComponent,
    PipeExecComponent,
    ContatosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    DataBindingExecComponent,
    ContadorComponent,
    ExerciseExplainedComponent,
    ExecDiretivasComponent,
    MemesComponent,
    DiretivaNgclassComponent,
    PipeExecComponent,
    ContatosComponent,
  ]

})
export class SharedModule { }
