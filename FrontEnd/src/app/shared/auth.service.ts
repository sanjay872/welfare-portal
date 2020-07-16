import { signup } from './model/signup.model';
import { HttpClient } from '@angular/common/http';
import { signin } from './model/signin.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { user } from './model/user.model';
import { updateuser } from './model/updateuser.model';
import { post } from './model/post.model';
import { email } from './model/email.model';

export class AuthService{
    constructor(private http:HttpClient,private route:Router){}
    user=new Subject<signin>();
    userid:string=null;
    desc:string;
    group:string=null;
    userdetail:user=null;
    userpost:post=null;
    post:post[]=[];
    allpost:post[];
    errorstatus=new Subject<string>();
    welid:string;
    imageToShow:any;
    welprofile:user=null;
    welimage:any=null;
    cate:string="all";
    emailbody:email;
    bg=new Subject<string>();
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
    getwelfaredetails(){
      this.http.get<user>("http://localhost:8080/getdetails/welfare/"+this.userid).subscribe(data=>{
        this.userdetail=new user(data.firstname,data.lastname,data.email,data.address,data.pincode,data.phonenumber,data.orgname);
      },error=>{
        console.log(error);
      }
      
      );
    }
    getdonordetails(){
      this.http.get<user>("http://localhost:8080/getdetails/donor/"+this.userid).subscribe(data=>{
        this.userdetail=new user(data.firstname,data.lastname,data.email,data.address,data.pincode,data.phonenumber,data.orgname);
      },error=>{
        console.log(error);
      }
      
      );
    }
    logout(){
      this.user.next(null);
      this.userid=null;
      this.desc=null;
      this.group=null;
      this.userdetail=null;
      this.userpost=null;
      this.post=null;
      this.allpost=null;
      this.imageToShow=null;
      this.route.navigate(['/signin']);
    }

    updateuser(update:updateuser){
      this.http.put("http://localhost:8080/updateprofile/"+this.userid,update).subscribe(res=>{},error=>{console.log(error)});
    }

    redirect(){
      // if(this.group==='welfare'){
      //   this.route.navigate(['/welfare']);
      // }else{
      //   this.route.navigate(['/donor']);
      // }
      this.route.navigate(['/home']);
    }

    createpost(desc:string,cate:string){
      this.userpost=new post(this.userid,this.userdetail.firstname,this.userdetail.lastname,this.userdetail.email
        ,this.userdetail.address,this.userdetail.pincode,this.userdetail.phonenumber,this.userdetail.orgname,desc,cate,new Date());
      this.http.post("http://localhost:8080/createpost",this.userpost).subscribe(res=>{
        this.route.navigate(['/welfare/post']);
      },error=>{
        console.log(error);
      });
    }

    getpost(){
      this.http.get<post[]>("http://localhost:8080/getpost/"+this.userid).subscribe(data=>{
        this.post=data;
      }),error=>{
        console.log(error);
      };
    }

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
    getprofiledp(){
        this.http.get("http://localhost:8080/getimage/"+this.userid,{ responseType: 'blob' }).subscribe(res=>{
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
     getaccount(){
      this.http.get<user>("http://localhost:8080/getdetails/welfare/"+this.welid).subscribe(data=>{
        this.welprofile=new user(data.firstname,data.lastname,data.email,data.address,data.pincode,data.phonenumber,data.orgname);
      },error=>{
        console.log(error);
      }
      
      );
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
      var body="<b>For your post: </b>"+desc+"<br/>"+"<b>donor_email: </b>"+this.userdetail.email+"<br/>"
      +"<b>donor_no: </b>"+this.userdetail.phonenumber+ "<br/>"+"<b>Mode of donate: </b>"+mode;
        var Email=new email(id,subject,body);
        this.http.post("http://localhost:8080/send",Email).subscribe(res=>{
          alert("wait for the welfare organizer to contact u");  
      },error=>{
          console.log(error);
        });
     }
      }

}