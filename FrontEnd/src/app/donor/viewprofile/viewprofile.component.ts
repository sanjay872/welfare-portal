import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewWelfareprofileComponent implements OnInit {
isloading=true;
  constructor(private donor:DonorService) { }

  ngOnInit() {
    this.donor.getaccount();
    this.donor.getdp();
    setTimeout(()=>{this.isloading=false},1000)
  }

}
