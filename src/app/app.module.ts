import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNavbarComponent } from './components/page-navbar/page-navbar.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PriceComponent } from './pages/price/price.component';
import { ServiceComponent } from './pages/service/service.component';
import { DoctorDashboardComponent } from './pages/doctor-dashboard/doctor-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { MessagesSidebarComponent } from './components/messages-sidebar/messages-sidebar.component';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { EditInvoiceComponent } from './pages/edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './pages/view-invoice/view-invoice.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { AddInvoiceComponent } from './pages/add-invoice/add-invoice.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ChatProfileComponent } from './components/chat-profile/chat-profile.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    EditAccountComponent,
    AppointmentComponent,
    TopbarComponent,
    HomeComponent,
    PageNavbarComponent,
    PageFooterComponent,
    AboutComponent,
    ContactComponent,
    PriceComponent,
    ServiceComponent,
    DoctorDashboardComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    MessagesSidebarComponent,
    PatientsPageComponent,
    AppointmentsPageComponent,
    InvoicesComponent,
    AddPatientComponent,
    EditPatientComponent,
    EditInvoiceComponent,
    ViewInvoiceComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    AddInvoiceComponent,
    ChatComponent,
    ChatSidebarComponent,
    ChatProfileComponent,
    AssetsComponent,
    AddAssetsComponent,
    EditAssetsComponent,
    EditProfileComponent,
    MyProfileComponent,
    BlogComponent,
    BlogDetailsComponent,
    AddBlogComponent,
    EditBlogComponent,
    AddDoctorComponent,
    DoctorsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
