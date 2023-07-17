import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    DashboardComponent,
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
    AddPatientComponent

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
