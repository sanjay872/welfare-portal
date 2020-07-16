import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'',redirectTo:'auth/signin',pathMatch:'full'},
  {path:'auth',loadChildren:'./Auth/auth.module#authModule'},
  {path:'welfare',loadChildren:'./welfare/welfare.module#welfareModule'},
  {path:'donor',loadChildren:()=>import('./donor/donor.module').then(m=>m.DonorModule)},
  {path:'admin',component:AdminComponent}
  //{path:'admin',loadChildren : ()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
