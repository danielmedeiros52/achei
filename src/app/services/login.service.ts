import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
@Injectable()
export class LoginService {

  constructor( private http:Http) { }
  getUsuarios(){
    return this.http.get("http://localhost:3000/usuarios")
        .map(res => res.json());
  }
}
