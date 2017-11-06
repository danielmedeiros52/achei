import { Usuario } from './../class/usuario';
import { AuthService } from './../cadastro/usuario/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private usuario:Usuario=new Usuario();

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }
  fazerLogin(){
this._authService.fazerLogin(this.usuario);
  }

}
