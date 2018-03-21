import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EmployeeComponenet} from './employee/employee.component';

@NgModule({
  imports:      [ BrowserModule ],
    declarations: [AppComponent, EmployeeComponenet ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
