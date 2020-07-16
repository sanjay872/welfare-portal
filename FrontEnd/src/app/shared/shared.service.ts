import { HttpClient } from '@angular/common/http';
import { authService } from '../Auth/auth.service';
import { email } from './model/email.model';
import { DonorService } from '../donor/donor.service';
import { Injectable } from '@angular/core';
import { updateuser } from './model/updateuser.model';
import { welfareService } from '../welfare/welfare.service';
import { Router } from '@angular/router';

@Injectable()
export class sharedService{
    imageToShow:any;
    constructor(private http:HttpClient,
                private auth:authService,
                private donor:DonorService,
                private route:Router,
                private welfare:welfareService
                ){}
    getprofiledp(){
        this.http.get("http://localhost:8080/getimage/"+this.auth.userid,{ responseType: 'blob' }).subscribe(res=>{
          if(res==null){
            console.log("no image")
          }else{
            let reader = new FileReader();
        reader.addEventListener("load", () => {
           this.imageToShow = reader.result;
        }, false);
        if (res) {
           reader.readAsDataURL(res);
        }
          }
      },error=>{
        console.log(error);
      })
     }
     sentmail(id:string,desc:string,mode:string){
        if(mode=='welfare'){
          var subject_welfare="Activation";
          var body_welfare="<b>"+desc+"</b>";
          var email_welfare=new email(id,subject_welfare,body_welfare);
          this.http.post("http://localhost:8080/send",email_welfare).subscribe(res=>{  
        },error=>{
            console.log(error);
          });
        }else{
          var subject="we found the donor for you";
        var body="<b>For your post: </b>"+desc+"<br/>"+"<b>donor_email: </b>"+this.donor.userdetail.email+"<br/>"
        +"<b>donor_no: </b>"+this.donor.userdetail.phonenumber+ "<br/>"+"<b>Mode of donate: </b>"+mode;
          var Email=new email(id,subject,body);
          this.http.post("http://localhost:8080/send",Email).subscribe(res=>{
            alert("wait for the welfare organizer to contact u");  
        },error=>{
            console.log(error);
          });
       }
        }
        updateuser(update:updateuser){
          this.http.put("http://localhost:8080/updateprofile/"+this.auth.group+"/"+this.auth.userid,update)
          .subscribe(res=>{},error=>{console.log(error)});
        }
        logout(){
          this.auth.user.next(null);
          this.auth.userid=null;
          this.auth.group=null;
          this.welfare.userdetail=null;
          this.welfare.userpost=null;
          this.welfare.post=null;
          this.donor.userdetail=null;
          this.donor.welprofile=null;
          this.donor.allpost=null;
          this.imageToShow=null;
          this.route.navigate(['/signin']);
        }
}