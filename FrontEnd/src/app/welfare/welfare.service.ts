import { user } from '../shared/model/user.model';
import { post } from '../shared/model/post.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { authService } from '../Auth/auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class welfareService{
    userdetail:user=null;
    userpost:post=null;
    post:post[]=[];
    constructor(private http:HttpClient,private route:Router,private auth:authService){}
    getwelfaredetails(){
       return this.http.get<user>("http://localhost:8080/getdetails/welfare/"+this.auth.userid)
      }
      createpost(desc:string,cate:string){
        this.userpost=new post(this.auth.userid,this.userdetail.firstname,this.userdetail.lastname,this.userdetail.email
          ,this.userdetail.address,this.userdetail.pincode,this.userdetail.phonenumber,this.userdetail.orgname,desc,cate,new Date());
        this.http.post("http://localhost:8080/createpost",this.userpost).subscribe(res=>{
          this.route.navigate(['/welfare/post']);
        },error=>{
          console.log(error);
        });
      }    
      getpost(){
        this.http.get<post[]>("http://localhost:8080/getpost/"+this.auth.userid).subscribe(data=>{
          this.post=data;
        }),error=>{
          console.log(error);
        };
      }
}