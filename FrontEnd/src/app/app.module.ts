import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { welfareModule } from './welfare/welfare.module';
import { DonorModule } from './donor/donor.module';
import { authModule } from './Auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    welfareModule,
    DonorModule,
    authModule,
    AdminModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
