import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { AdminComponent } from './Components/admin/admin.component';
import { PublicComponent } from './Components/public/public.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, PublicComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserDashboardModule { }
