import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminComponent, LoginComponent, EditComponent],
  providers: [AuthService]
})
export class AdminModule { }
