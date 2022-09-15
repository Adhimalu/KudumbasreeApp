import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmemberComponent } from './addmember/addmember.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'side',component:SidebarComponent},
  {path:'admin',component:AdminhomeComponent},
  {path:'login',component:LoginadminComponent},
  {path:'add',component:AddmemberComponent},
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
