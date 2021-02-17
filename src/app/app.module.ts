import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DataBindingExecComponent } from './data-binding-exec/data-binding-exec.component';
import { ContadorComponent } from './contador/contador.component';
import { ExerciseExplainedComponent } from './exercise-explained/exercise-explained.component';
import { ExecDiretivasComponent } from './exec-diretivas/exec-diretivas.component';
import { MemesComponent } from './memes/memes.component';

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
    MemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
