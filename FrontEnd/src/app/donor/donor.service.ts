import { HttpClient } from '@angular/common/http';
import { post } from '../shared/model/post.model';
import { user } from '../shared/model/user.model';
import { Injectable } from '@angular/core';
import { authService } from '../Auth/auth.service';
@Injectable()
export class DonorService {
    allpost:post[];
    cate:string="all";
    welimage:any=null;
    welid: string;
    welprofile:user=null;
    userid:string;
    userdetail:user=null;
    constructor(private http:HttpClient,private auth:authService){}
    getallpost(){
        this.http.get<post[]>("http://localhost:8080/getallpost/").subscribe(data=>{
          this.allpost=data;
        },error=>{
          console.log(error);
        })
  
      } 
      getallpostbycate(){
        this.http.get<post[]>("http://localhost:8080/getallpost/"+this.cate).subscribe(data=>{
          this.allpost=data;
        },error=>{
          console.log(error);
        })
  
}
getdp(){
    this.http.get("http://localhost:8080/getimage/"+this.welid,{ responseType: 'blob' }).subscribe(res=>{
      if(res==null){
        console.log("no image")
      }else{
        let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.welimage = reader.result;
    }, false);
    if (res) {
       reader.readAsDataURL(res);
    }
      }
  },error=>{
    console.log(error);
  })
 }
 getaccount(){
    this.http.get<user>("http://localhost:8080/getdetails/welfare/"+this.welid).subscribe(data=>{
      this.welprofile=new user(data.firstname,data.lastname,data.email,data.address,data.pincode,data.phonenumber,data.orgname);
    },error=>{
      console.log(error);
    }
    
    );
  }
  getdonordetails(){
   return this.http.get<user>("http://localhost:8080/getdetails/donor/"+this.auth.userid);
  }
}
