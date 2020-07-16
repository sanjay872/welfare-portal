import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelfareComponent } from './welfare.component';
import { welfareguard } from '../guard/welfare-guard.service';
import { ProfileComponent } from '../profile/profile.component';
import { WelPostComponent } from './wel-post/wel-post.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { HelpComponent } from '../help/help.component';
import { HomeComponent } from '../home/home.component';
import { homeguard } from '../guard/home-guard.service';
import { EditProfileComponent } from '../profile/editprofile/editprofile.component';
import { ChangedpComponent } from '../profile/changedp/changedp.component';
import { profileModule } from '../profile/profile.module';
import { ViewProfileComponent } from '../profile/view-profile/view-profile.component';

const welroute:Routes=[
    {path:'',component:WelfareComponent,canActivate:[welfareguard],
    children: [
      {path:'home',component:HomeComponent,canActivate:[homeguard]}, 
      {path:'profile',component:ProfileComponent,children:[
        {path:'',component:ViewProfileComponent},
        {path:'editprofile',component:EditProfileComponent},
        {path:'editdp',component:ChangedpComponent}
      ]},
      {path:'post',component:WelPostComponent,canActivateChild:[welfareguard],children:[
        {path:'createpost',component:CreatepostComponent}
      ]},
      {path:'help',component:HelpComponent,canActivateChild:[welfareguard]}    
    ]
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(welroute),
        profileModule
    ],exports:[
        RouterModule
    ]
})
export class WelRouter{

}