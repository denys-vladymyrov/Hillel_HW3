import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [AdminComponent, LoginComponent],
  providers: [AuthService]
})
export class AdminModule { }
