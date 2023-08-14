import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss']
})
export class EditAppointmentComponent implements OnInit {
  appointmentData: any = {};
  patients: any[] = []; // Array to store patient names
  doctors: any[] = []; // Array to store doctor names
  appointmentId: any;

  constructor(private router: Router, private AppointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.loadPatients();
    this.loadDoctors();
  }
  loadPatients() {
    // Implement a method in your AppointmentsService to fetch patient names from the backend
    this.AppointmentsService.getPatients().subscribe(
      (response) => {
        this.patients = response; // Store patient names
      },
      (error) => {
        console.error('Error loading patients', error);
      }
    );
  }

  loadDoctors() {
    // Implement a method in your AppointmentsService to fetch doctor names from the backend
    this.AppointmentsService.getDoctors().subscribe(
      (response) => {
        this.doctors = response; // Store doctor names
      },
      (error) => {
        console.error('Error loading doctors', error);
      }
    );
  }
  
}
