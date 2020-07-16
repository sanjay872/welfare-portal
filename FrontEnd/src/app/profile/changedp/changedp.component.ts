import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { authService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-changedp',
  templateUrl: './changedp.component.html',
  styleUrls: ['./changedp.component.css']
})
export class ChangedpComponent implements OnInit {
  fileData: File;
  constructor(private auth:authService,private route:Router,private http: HttpClient) { }
  selectedFile:File;
  ngOnInit() {
  }
 onFileSelected(event){
  this.selectedFile=<File>event.target.files[0];
 }  
onUpload(){
  const fd=new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name);
  this.http.post("http://localhost:8080/uploadimage/"+this.auth.userid,fd).subscribe(res=>{
    this.getback();
  },error=>{
    console.log(error);
  });

}
  getback(){
    this.route.navigate(['/'+this.auth.group,'profile']);
  }
}
