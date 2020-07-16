import { Component, OnInit } from '@angular/core';
import { welfareService } from '../welfare.service';

@Component({
  selector: 'app-wel-post',
  templateUrl: './wel-post.component.html',
  styleUrls: ['./wel-post.component.css']
})
export class WelPostComponent implements OnInit {
status:boolean;
  constructor(private welfare:welfareService) { }

  ngOnInit() {
    this.welfare.getpost();
  }
}
