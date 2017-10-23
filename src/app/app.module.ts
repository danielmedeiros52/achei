import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule} from '@angular/material';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {MenuLateralComponent} from './menu-lateral/menu-lateral.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuLateralComponent,
    CadastroComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
