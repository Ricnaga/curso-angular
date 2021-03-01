import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataBindingExecComponent } from './components/data-binding-exec/data-binding-exec.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ExerciseExplainedComponent } from './components/exercise-explained/exercise-explained.component';
import { ExecDiretivasComponent } from './components/exec-diretivas/exec-diretivas.component';
import { MemesComponent } from '../memes/memes.component';
import { DiretivaNgclassComponent } from './components/diretiva-ngclass/diretiva-ngclass.component';
import { PipeExecComponent } from './components/pipe-exec/pipe-exec.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';



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
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DataBindingExecComponent,
    ContadorComponent,
    ExerciseExplainedComponent,
    ExecDiretivasComponent,
    MemesComponent,
    DiretivaNgclassComponent,
    PipeExecComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }]

})
export class SharedModule { }
