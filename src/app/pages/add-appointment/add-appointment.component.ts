import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  appointmentData: any = {};
  patients: any[] = []; // Array to store patient names
  doctors: any[] = []; // Array to store doctor names

  constructor(private router: Router, private AppointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.loadPatients(); // Load patient names
    this.loadDoctors();
  }
  onSaveButtonClick() {
    this.AppointmentsService.saveAppointment(this.appointmentData)
      .subscribe(
        (response) => {
          this.router.navigate(['/staff-appointments']);

        },
        (error) => {
          this.router.navigate(['/staff-appointments']);
        }
      );
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
