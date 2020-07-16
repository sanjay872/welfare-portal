import { NgModule } from '@angular/core';
import { DonorService } from './donor/donor.service';
import { welfareService } from './welfare/welfare.service';
import { sharedService } from './shared/shared.service';
import { authService } from './Auth/auth.service';
import { AdminService } from './admin/admin.service';

@NgModule({
    providers:[
        DonorService,
        welfareService,
        sharedService,
        authService,
        AdminService
    ]
})
export class CoreModule{

}