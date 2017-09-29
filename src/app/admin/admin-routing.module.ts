import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'details',
      component: EditComponent,
    }, {
      path: 'details/:id',
      component: EditComponent
    }]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRoutingModule { }
