import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { sharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        AdminComponent,
    ],
    imports:[
        FormsModule,
        CommonModule,
        sharedModule
    ]
})
export class AdminModule{

}