import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { welfareService } from './welfare.service';
import { sharedService } from '../shared/shared.service';

@Component({
  selector: 'app-welfare',
  templateUrl: './welfare.component.html',
  styleUrls: ['./welfare.component.css']
})
export class WelfareComponent implements OnInit {
  home:boolean=true;
  backgroundUrl="../assets/sanjay_portal.jpg";
  constructor(private welfare:welfareService,private shared:sharedService,private route:Router) { }
  ngOnInit() {
    this.welfare.getwelfaredetails();
    this.shared.getprofiledp();
   }
}
