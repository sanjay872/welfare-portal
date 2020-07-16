import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DonorComponent } from './donor.component';
import { donorguard } from '../guard/donor-guard.service';
import { ProfileComponent } from '../profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { HelpComponent } from '../help/help.component';
import { ViewWelfareprofileComponent } from './viewprofile/viewprofile.component';
import { HomeComponent } from '../home/home.component';
import { homeguard } from '../guard/home-guard.service';
import { EditProfileComponent } from '../profile/editprofile/editprofile.component';
import { ChangedpComponent } from '../profile/changedp/changedp.component';
import { ViewProfileComponent } from '../profile/view-profile/view-profile.component';

const donorRoute:Routes=[
    {path:'',component:DonorComponent,canActivate:[donorguard],
    children: [
      {path:'home',component:HomeComponent,canActivate:[homeguard]},
      {path:'profile',component:ProfileComponent,children:[
        {path:'',component:ViewProfileComponent},
        {path:'editprofile',component:EditProfileComponent},
        {path:'editdp',component:ChangedpComponent}
      ]},
      {path:'category',component:CategoryComponent,canActivateChild:[donorguard]},
      {path:'post',component:ViewpostComponent,canActivateChild:[donorguard]},
      {path:'help',component:HelpComponent,canActivateChild:[donorguard]},
      {path:'welprofile',component:ViewWelfareprofileComponent,canActivate:[donorguard]}
    ]}, 
   
]

@NgModule({
    imports:[
        RouterModule.forChild(donorRoute)
    ],exports:[
        RouterModule
    ]
})
export class DonorRouter{

}