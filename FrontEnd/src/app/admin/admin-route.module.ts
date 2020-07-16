import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { adminguard } from '../guard/admin_guard.service';
import { NgModule } from '@angular/core';

const admin:Routes=[
        {path:'admin',component:AdminComponent,canActivate:[adminguard]}
]

@NgModule({
    imports:[
        RouterModule.forChild(admin)
    ],exports:[
        RouterModule
    ]
})
export class adminRout{

}