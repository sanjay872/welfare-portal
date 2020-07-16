import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        NavigationComponent

        ],imports:[
            RouterModule,
            CommonModule
        ]
    ,exports:[
        NavigationComponent
    ]
})
export class NavigationModule {

}