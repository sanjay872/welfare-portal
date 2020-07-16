import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { authService } from '../Auth/auth.service';
@Injectable({providedIn:'root'})
export class welfareguard implements CanActivate{
  constructor(private authservice:authService){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
      return (this.authservice.userid!=null&&this.authservice.group==='welfare');
    }
}