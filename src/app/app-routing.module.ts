import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoctorDashboardComponent } from './pages/doctor-dashboard/doctor-dashboard.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'appointment', component: AppointmentComponent},
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'edit-account', component: EditAccountComponent},
  { path:'dashboard', component: DoctorDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }