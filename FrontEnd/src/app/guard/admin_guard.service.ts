import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AdminService } from '../admin/admin.service';
@Injectable({providedIn:'root'})
export class adminguard implements CanActivate{
  constructor(private admin:AdminService){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
      return (this.admin.admin!=null);
    }
}