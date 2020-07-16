import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/model/user.model';
import { welfareService } from 'src/app/welfare/welfare.service';
import { DonorService } from 'src/app/donor/donor.service';
import { authService } from 'src/app/Auth/auth.service';
import { sharedService } from 'src/app/shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  isloading=true;
  userdetail:user;

  constructor(private welfare:welfareService,
    private donor:DonorService,
    private auth:authService,
    private shared:sharedService,
    private route:Router,private routes:ActivatedRoute) { }
  ngOnInit() {
    setTimeout(()=>{
      this.isloading=false;
    },1000
    )
    if(this.auth.group=='welfare'){
    this.welfare.getwelfaredetails().subscribe(data=>{
        this.userdetail=new user(data.firstname,data.lastname,data.email,data.address,data.pincode,data.phonenumber,data.orgname);
      },error=>{
        console.log(error);
      }
      );
      this.welfare.userdetail=this.userdetail;
    }else{
      this.donor.getdonordetails().subscribe(data=>{
        this.userdetail=new user(data.firstname,data.lastname,data.email,data.address,data.pincode,data.phonenumber,data.orgname);
      },error=>{
        console.log(error);
      }
      );
      this.donor.userdetail=this.userdetail;
    }
   this.shared.getprofiledp();
  }
  edit(){
    this.route.navigate(['editdp'],{relativeTo:this.routes});
  }
  onEdit(){
    this.route.navigate(['/'+this.auth.group,'profile','editprofile'])
  }
}
