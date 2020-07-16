import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

const authRoute:Routes=[
    {path:'',component:AuthComponent,children:[
        {path:'signin',component:SigninComponent},
        {path:'signup',component:SignupComponent}
    ]}
    
]
@NgModule({
    imports:[
        RouterModule.forChild(authRoute)
    ],exports:[
        RouterModule
    ]
})
export class authRouter{}