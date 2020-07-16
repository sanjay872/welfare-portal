import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { sharedService } from 'src/app/shared/shared.service';
import { authService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditProfileComponent implements OnInit {
  namepattern="[a-zA-Z]{1,}";
  phonenopattern="[0-9]{10}";
  pinpattern="[0-9]{6}";
  group:string;
  constructor(private shared:sharedService,private auth:authService,private route:Router) { }

  ngOnInit() {
    this.group=this.auth.group;
  }
  onSubmit(form:NgForm){
    this.shared.updateuser(form.value);
    this.route.navigate(['/'+this.auth.group,'profile']);
  }
}
