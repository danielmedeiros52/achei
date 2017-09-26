import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule} from '@angular/material';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {MenuLateralComponent} from './menu-lateral/menu-lateral.component';
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
