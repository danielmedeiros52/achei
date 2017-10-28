import { AuthService } from './../cadastro/usuario/auth.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, ActivatedRoute,Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  
  constructor(
    private ahthSevice: AuthService,
    private _router: Router
  ) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):Observable<boolean>|boolean{
if(this.ahthSevice.getUsuarioAutenticado()){

  return true;
}

this._router.navigate([''])
return false;

  }

  
}
