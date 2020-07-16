import { Component, OnInit } from '@angular/core';
import { DonorService } from './donor.service';
import { sharedService } from '../shared/shared.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
home:boolean=true;
  constructor(private donor:DonorService,private share:sharedService) { }

  ngOnInit() {
this.donor.getdonordetails();
this.share.getprofiledp();
  }

}
