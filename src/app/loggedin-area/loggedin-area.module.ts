import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoggedinAreaRoutingModule } from './loggedin-area-routing.module';
import { LoggedinAreaComponent } from './loggedin-area.component';



@NgModule({
  declarations: [LoggedinAreaComponent],
  imports: [
    CommonModule,
    LoggedinAreaRoutingModule,
    SharedModule
  ]
})
export class LoggedinAreaModule { }
