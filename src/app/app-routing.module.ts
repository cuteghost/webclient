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
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { EditBlogComponent } from './pages/edit-blog/edit-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'appointment', component: AppointmentComponent },
  
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'price', component: PriceComponent },
  
  { path: 'edit-account', component: EditAccountComponent },
  { path: 'dashboard', component: DoctorDashboardComponent },

  { path: 'patients', component:PatientsPageComponent },
  { path: 'add-patient', component:  AddPatientComponent },
  { path: 'edit-patient', component: EditPatientComponent },
  
  { path: 'appointments', component:AppointmentsPageComponent },
  { path: 'add-appointment', component: AddAppointmentComponent },
  { path: 'edit-appointment', component: EditAppointmentComponent },
  
  { path: 'invoices', component: InvoicesComponent },
  { path: 'edit-invoice', component: EditInvoiceComponent },
  { path: 'view-invoice', component: ViewInvoiceComponent },
  { path: 'add-invoice', component: AddInvoiceComponent },

  { path: 'chat', component:ChatComponent },

  { path: 'assets', component:AssetsComponent },
  { path: 'edit-asset', component:EditAssetsComponent },
  { path: 'add-asset', component:AddAssetsComponent },

  {path:'edit-profile', component:EditProfileComponent},
  {path:'my-profile', component:MyProfileComponent},

  {path:'blog', component:BlogComponent},
  {path:'blog-details', component:BlogDetailsComponent},
  {path:'add-blog', component:AddBlogComponent},
  {path:'edit-blog', component:EditBlogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }