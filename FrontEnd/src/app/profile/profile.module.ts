import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './editprofile/editprofile.component';
import { ChangedpComponent } from './changedp/changedp.component';
import { CommonModule } from '@angular/common';
import { sharedModule } from '../shared/shared.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({
    declarations:[
        ProfileComponent,
        EditProfileComponent,
        ChangedpComponent,
        ViewProfileComponent
    ],imports:[
        FormsModule,
        CommonModule,
        RouterModule,
        sharedModule,
        NavigationModule
    ]
})
export class profileModule{

}