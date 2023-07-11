import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'edit-account', component: EditAccountComponent },
  { path: 'add-staff', component: AddStaffComponent },
  { path: 'edit-staff', component: EditStaffComponent },
  { path: 'all-staff', component: StaffListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }