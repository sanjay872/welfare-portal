import { HttpClient } from '@angular/common/http';
import { admin } from './admin.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminService{
   admin=new BehaviorSubject(null);
   welfare:admin;
    constructor(private http:HttpClient,private route:Router){}

    adminlogin(admindata={email:'',password:''}){
        this.http.post("http://localhost:8080//admin",admindata).subscribe(res=>{
            this.admin.next("true");
            this.route.navigate(['/admin']);
        },error=>{
            this.admin.next(null);
            console.log(error);
        });
    }

    getwelfareusers(){
        this.http.get<admin>("http://localhost:8080/admin/welfareprofile").subscribe(data=>{
            this.welfare=data;
        });
    }
}