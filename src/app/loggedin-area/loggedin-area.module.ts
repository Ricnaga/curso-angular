import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedinAreaRoutingModule } from './loggedin-area-routing.module';
import { LoggedinAreaComponent } from './loggedin-area.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoggedinAreaComponent],
  imports: [
    CommonModule,
    LoggedinAreaRoutingModule,
    SharedModule
  ]
})
export class LoggedinAreaModule { }
