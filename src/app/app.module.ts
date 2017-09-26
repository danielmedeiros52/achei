import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule} from '@angular/material';
>>>>>>> 929284f50c71ffa71f9e194005c641d4bafa4bdb
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
