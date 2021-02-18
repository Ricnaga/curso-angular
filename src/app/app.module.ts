import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesContatosComponent } from './shared/components/contatos/detalhes-contatos/detalhes-contatos.component';
import localeBR from '@angular/common/locales/pt';

registerLocaleData(localeBR, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ExtratoComponent,
    NotFoundComponent,
    DetalhesContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
