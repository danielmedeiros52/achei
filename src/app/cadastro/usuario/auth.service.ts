import { Router } from '@angular/router';
import { Usuario } from './../../classes/usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  private usuarioAutenticado: boolean = false;
  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'achei' &&
      usuario.senha === '123') {
      this.usuarioAutenticado = true
      this.router.navigate(['home'])
    } else {

      this.usuarioAutenticado = false
      alert("Login: achei senha:123")
    };
  }

  getUsuarioAutenticado(){
    return this.usuarioAutenticado
  }

}
