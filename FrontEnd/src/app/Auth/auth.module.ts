import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { authRouter } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
    declarations:[
        AuthComponent,
        SigninComponent,
        SignupComponent
    ],imports:[
        FormsModule,
        CommonModule,
        authRouter
    ]
})
export class authModule{

}