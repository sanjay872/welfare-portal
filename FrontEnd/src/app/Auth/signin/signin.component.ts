import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../admin/admin.service';
import { authService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})  
export class SigninComponent implements OnInit {
  usernamepattern="[a-zA-Z0-9]{6,}";
  emailpattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*";
  passwordpattern="[a-zA-Z0-9#$^+=!*()@%&]{4,}";
  userdata={email:'',password:'',user:''};
  admindata={email:'',password:''};
  backgroundUrl="../assets/background.jpg";
  errorstatus:boolean;
  constructor(private authservice:authService,private admin:AdminService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    this.userdata.email=form.value.email;
    this.userdata.password=form.value.password;
    this.userdata.user=form.value.user;
    if(form.value.user=="welfare"){
      this.authservice.welfaresignin(this.userdata);
    }else if(form.value.user=="admin"){
      this.admindata.email=form.value.email;
      this.admindata.password=form.value.password;
      this.admin.adminlogin(this.admindata);
    }else{
      this.authservice.donorsignin(this.userdata);
    }
    this.authservice.errorstatus.subscribe(res=>{
      if(res==='true'){
        this.errorstatus=true;
      }else{
        this.errorstatus=false;
      }
    })
  }

}
