import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../donor.service';
import { sharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  constructor(private donor:DonorService,private share:sharedService,private route:Router) { }
  mailtext:string;
  ngOnInit() {
    this.donor.getallpostbycate();
  }
  getaccount(welid:string){
    this.donor.welid=welid;
    this.route.navigate(['/welprofile']);
  }

  mailme(mail:string){
    this.mailtext="mailto:"+mail;
    window.location.href=this.mailtext;
  }

  makedonate(email:string,desc:string,mode:string){
    this.share.sentmail(email,desc,mode);
  }
}
