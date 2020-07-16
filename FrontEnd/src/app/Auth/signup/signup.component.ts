import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { signup } from '../../shared/model/signup.model';
import { authService } from '../auth.service';
import { LoggingService } from 'src/app/logging.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userdata:signup;
  errorstatus:boolean;
  registered:boolean;
  namepattern="[a-zA-Z]{1,}";
  emailpattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*";
  passwordpattern="[a-zA-Z0-9#$^+=!*()@%&]{7,}";
  phonenopattern="[0-9]{10}";
  pinpattern="[0-9]{6}";
  constructor(private route:Router,private authservice:authService,private loggingService:LoggingService) { }

  ngOnInit() {
    this.errorstatus=false;
    this.loggingService.printMessage("this is from SignupComponent");
  }
  onSubmit(form:NgForm){
    this.userdata=form.value;
    this.authservice.usersignup(this.userdata).subscribe(res=>{
      if(form.value.group=='welfare'){
        alert("your account will be activated within 24 hrs");
      }
      this.route.navigate(['/auth','signin']); 
    },error=>{
      this.errorstatus=true;
    });
  }
  
}
