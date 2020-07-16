import { signup } from '../shared/model/signup.model';
import { signin } from '../shared/model/signin.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class authService{
    user=new Subject<signin>();
    errorstatus=new Subject<string>();
    userid:string;
    group:string;
    constructor(private http:HttpClient,private route:Router){}
    usersignup(userdata:signup){
        return this.http.post("http://localhost:8080/create",userdata);
     }
     welfaresignin(userlogin={email:'',password:'',user:''}){
       this.http.post<signin>("http://localhost:8080/login/welfare",userlogin,{observe:'response'}).subscribe(res=>{
         const User=new signin(res.body.userId,res.body.group);
         this.user.next(User);
         this.userid=res.body.userId;
         this.group=res.body.group;
         this.redirect();
         this.errorstatus.next('false');
       },error=>{
         this.errorstatus.next('true');
       });
     }
     donorsignin(userlogin={email:'',password:''}){
       this.http.post<signin>("http://localhost:8080/login/donor",userlogin,{observe:'response'}).subscribe(res=>{
         const User=new signin(res.body.userId,res.body.group);
         this.user.next(User);
         this.userid=res.body.userId;
         this.group=res.body.group;
         this.redirect();
         this.errorstatus.next('false');
       },error=>{
         this.errorstatus.next('true');
       });
     }
     redirect(){
        this.route.navigate(['/'+this.group,'home']);
      }
}