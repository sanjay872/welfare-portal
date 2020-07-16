import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route:Router,private donor:DonorService) { }

  ngOnInit() {
  }
  category(cate:string){
    this.donor.cate=cate;
    this.route.navigate(['/donor','post']);
  }

}
