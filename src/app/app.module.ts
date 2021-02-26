import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './loggedin-area/extrato/extrato.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import localeBR from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeBR, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExtratoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
