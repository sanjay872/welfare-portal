import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { HelpComponent } from '../help/help.component';
import { HomeComponent } from '../home/home.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
    declarations:[
        LoaderComponent,
        HelpComponent,
        HomeComponent
    ],imports:[
        CommonModule,
        NavigationModule
    ],exports:[
        LoaderComponent,
        CommonModule,
        HelpComponent,
        HomeComponent
    ]
})
export class sharedModule{

}