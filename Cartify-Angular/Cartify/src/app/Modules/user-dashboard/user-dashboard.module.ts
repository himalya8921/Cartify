import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { AdminComponent } from './Components/admin/admin.component';
import { PublicComponent } from './Components/public/public.component';


@NgModule({
  declarations: [AdminComponent, PublicComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
