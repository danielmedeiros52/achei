import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './cadastro/usuario/usuario.component';
import { LoginComponent } from './login/login.component';


const ACHEI_ROUTES: Routes =[
    {path:'',component:LoginComponent},
    {path:'home',component:MenuLateralComponent},
    {path:'perfil',component:UsuarioComponent}
    
];

export const routing: ModuleWithProviders=RouterModule.forRoot(ACHEI_ROUTES);