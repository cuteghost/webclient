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
import { PriceComponent } from './pages/price/price.component';
import { ServiceComponent } from './pages/service/service.component';
import { DoctorDashboardComponent } from './pages/doctor-dashboard/doctor-dashboard.component';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { EditInvoiceComponent } from './pages/edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './pages/view-invoice/view-invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'edit-account', component: EditAccountComponent },
  { path: 'price', component: PriceComponent },
  { path:'dashboard', component: DoctorDashboardComponent },
  { path:'patients', component:PatientsPageComponent },
  { path:'appointments', component:AppointmentsPageComponent},
  { path: 'invoices', component: InvoicesComponent},
  { path: 'add-patient', component:  AddPatientComponent},
  { path:'edit-patient', component: EditPatientComponent},
  { path:'edit-invoice', component: EditInvoiceComponent},
  {path: 'view-invoice', component: ViewInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }