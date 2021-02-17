import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { DataBindingExecComponent } from './shared/components/data-binding-exec/data-binding-exec.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { ExerciseExplainedComponent } from './shared/components/exercise-explained/exercise-explained.component';
import { ExecDiretivasComponent } from './shared/components/exec-diretivas/exec-diretivas.component';
import { MemesComponent } from './memes/memes.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { PipeExecComponent } from './shared/components/pipe-exec/pipe-exec.component';
import localeBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeBR, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DataBindingExecComponent,
    ContadorComponent,
    ExerciseExplainedComponent,
    ExecDiretivasComponent,
    MemesComponent,
    DiretivaNgclassComponent,
    PipeExecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
