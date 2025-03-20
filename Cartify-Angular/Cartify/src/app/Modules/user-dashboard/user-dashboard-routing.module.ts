import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { PublicComponent } from './Components/public/public.component';


const routes: Routes = [
  {path:'admin',component: AdminComponent},
  {path:'public',component: PublicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
