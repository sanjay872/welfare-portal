import { NgModule } from '@angular/core';
import { WelfareComponent } from './welfare.component';
import { WelPostComponent } from './wel-post/wel-post.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { WelRouter } from './wel-router.module';
import { sharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        WelfareComponent,
        WelPostComponent,
        CreatepostComponent,
    ],
    imports:[
        FormsModule,
        CommonModule,
        NavigationModule,
        WelRouter,
        sharedModule
    ]
})
export class welfareModule{

}