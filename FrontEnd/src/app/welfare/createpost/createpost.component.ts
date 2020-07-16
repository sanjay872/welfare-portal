import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { welfareService } from '../welfare.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  constructor(private welfare:welfareService) { }
  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.welfare.createpost(form.value.desc,form.value.category);
  }
}
