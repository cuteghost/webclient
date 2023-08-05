import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { LoginGuard } from './services/login-guard/login-guard.service';


import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PriceComponent } from './pages/price/price.component';
import { ServiceComponent } from './pages/service/service.component';
import { DoctorDashboardComponent } from './pages/doctor-dashboard/doctor-dashboard.component';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { AddInvoiceComponent } from './pages/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './pages/edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './pages/view-invoice/view-invoice.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { AddAssetsComponent } from './pages/add-assets/add-assets.component';
import { EditAssetsComponent } from './pages/edit-assets/edit-assets.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { MyProfileComponent } from './pages/staff-my-profile/my-profile.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { EditBlogComponent } from './pages/edit-blog/edit-blog.component';
import { AddDoctorComponent } from './pages/add-doctor/add-doctor.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientAppointmentsComponent } from './pages/patient-appointments/patient-appointments.component';
import { PatientInvoicesComponent } from './pages/patient-invoices/patient-invoices.component';
import { PatientBlogsComponent } from './pages/patient-blogs/patient-blogs.component';
import { PatientDoctorsComponent } from './pages/patient-doctors/patient-doctors.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'price', component: PriceComponent },
  
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent },
  
  { path: 'edit-account', component: EditAccountComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DoctorDashboardComponent, canActivate: [AuthGuard] },

  { path: 'patients', component:PatientsPageComponent, canActivate: [AuthGuard] },
  { path: 'add-patient', component:  AddPatientComponent, canActivate: [AuthGuard] },
  { path: 'edit-patient', component: EditPatientComponent, canActivate: [AuthGuard] },
  
  { path: 'appointments', component:AppointmentsPageComponent },
  { path: 'add-appointment', component: AddAppointmentComponent, canActivate: [AuthGuard] },
  { path: 'edit-appointment', component: EditAppointmentComponent, canActivate: [AuthGuard] },
  
  { path: 'invoices', component: InvoicesComponent},
  { path: 'edit-invoice', component: EditInvoiceComponent, canActivate: [AuthGuard] },
  { path: 'view-invoice', component: ViewInvoiceComponent, canActivate: [AuthGuard] },
  { path: 'add-invoice', component: AddInvoiceComponent, canActivate: [AuthGuard] },

  { path: 'chat', component:ChatComponent, canActivate: [AuthGuard] },

  { path: 'assets', component:AssetsComponent, canActivate: [AuthGuard] },
  { path: 'edit-asset', component:EditAssetsComponent, canActivate: [AuthGuard] },
  { path: 'add-asset', component:AddAssetsComponent, canActivate: [AuthGuard] },

  { path:'edit-profile', component:EditProfileComponent, canActivate: [AuthGuard] },
  { path:'my-profile', component:MyProfileComponent, canActivate: [AuthGuard] },

  { path:'blog', component:BlogComponent, canActivate:[AuthGuard] },
  { path:'blog-details', component:BlogDetailsComponent, canActivate:[AuthGuard] },
  { path:'add-blog', component:AddBlogComponent, canActivate:[AuthGuard] },
  { path:'edit-blog', component:EditBlogComponent, canActivate:[AuthGuard]},

  {path:'add-doctor', component: AddDoctorComponent, canActivate:[AuthGuard]},
  {path:'doctors', component:DoctorsComponent, canActivate:[AuthGuard]},

  {path:'patient-dashboard', component:PatientDashboardComponent, canActivate:[AuthGuard]},
  {path:'patient-appointments', component:PatientAppointmentsComponent, canActivate:[AuthGuard]},
  {path:'patient-invoices', component:PatientInvoicesComponent, canActivate:[AuthGuard]},
  {path:'patient-blogs', component:PatientBlogsComponent, canActivate:[AuthGuard]},
  {path:'patient-doctors', component:PatientDoctorsComponent, canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }