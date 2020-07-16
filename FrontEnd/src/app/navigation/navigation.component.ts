import { Component, OnInit} from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { authService } from '../Auth/auth.service';
import { sharedService } from '../shared/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  group:string;
  constructor(private authservice:authService,private shared:sharedService) {}

  ngOnInit() {
   this.group=this.authservice.group;
  }
  logout(){
  this.shared.logout();
  }
}
