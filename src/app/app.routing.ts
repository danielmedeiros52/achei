import { AchadosPerdidosComponent } from './achados-perdidos/achados-perdidos.component';
import { AuthGuard } from './guards/authGguard';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './cadastro/usuario/usuario.component';
import { LoginComponent } from './login/login.component';


const ACHEI_ROUTES: Routes = [
    {
        path:'',
        component: LoginComponent,
       
    },
    {
        path: 'home',
        component: MenuLateralComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'perfil',
        component: UsuarioComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'achei',
        component: AchadosPerdidosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'perdi',
        component: AchadosPerdidosComponent,
        canActivate: [AuthGuard]
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(ACHEI_ROUTES);