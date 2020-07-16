import { NgModule } from '@angular/core';
import { DonorComponent } from './donor.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { ViewWelfareprofileComponent } from './viewprofile/viewprofile.component';
import { CategoryComponent } from './category/category.component';
import { NavigationModule } from '../navigation/navigation.module';
import { DonorRouter } from './donor-router.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sharedModule } from '../shared/shared.module';
import { profileModule } from '../profile/profile.module';

@NgModule({
    declarations:[
        DonorComponent,
        ViewpostComponent,
        ViewWelfareprofileComponent,
        CategoryComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        NavigationModule,
        DonorRouter,
        sharedModule,
        profileModule
    ]
})
export class DonorModule{

}