import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuardGuard implements CanActivate {
  
  constructor(private loginService: LoginServiceService,
              private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if (this.loginService.isLogged()){
        return true;
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
    
  }
  
}
