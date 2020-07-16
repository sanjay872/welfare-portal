import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { sharedService } from '../shared/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
isloading=true;
  constructor(private admin:AdminService,private route:Router,private http:HttpClient,private shared:sharedService) { }

  ngOnInit() {
    this.admin.getwelfareusers();
    setTimeout(()=>{this.isloading=false},1000)
  }
  logout(){
    this.admin.admin.next(null);
    this.route.navigate(['/signin']);
  }
  makeactive(userid:string,email:string){
    this.http.post("http://localhost:8080/admin/setactive",userid).subscribe(
      res=>{
        console.log(res);
        this.admin.getwelfareusers();
        this.shared.sentmail(email,"Your Account got Activated","welfare");
      },error=>{
        console.log(error);
      }
    );
  }

}
