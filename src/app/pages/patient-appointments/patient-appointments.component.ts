import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentsService } from '../../services/appointments.service';
import { DoctorsService } from 'src/app/services/doctors.service';
@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.scss']
})
export class PatientAppointmentsComponent implements OnInit {
  appointments: any[]= []; // Assuming the patients array contains patient objects with name, age, address, phone, and email properties
  filteredAppointments: any[] = []; // Contains filtered patients
  searchTerm: string = ''; // Holds the value of the search input
  doctors: any[]=[];
  constructor(private router: Router, private AppointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.fetchAppointments()
  }
  fetchAppointments()
  {
    this.AppointmentsService.getAppointment().subscribe(
      (appointments) => {
        this.appointments = appointments;
        this.filteredAppointments = appointments;
         // Set filteredPatients to the initial list of patients

      },
      (error) => {
        console.error(error);
      }
    );
  }
  // navigateToAppointment(appointmentId: number): void {
  //   // Navigate to the patient page with the patient's ID
  //   this.router.navigate(['/Appointment', appointmentId]);
}

