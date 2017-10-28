import { AuthGuard } from './guards/authGguard';

import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './cadastro/usuario/auth.service';
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
import { UsuarioComponent } from './cadastro/usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuLateralComponent,
    CadastroComponent,
    InicioComponent,
    LoginComponent,
    UsuarioComponent,

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
    MatExpansionModule,
    routing,
    FormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
