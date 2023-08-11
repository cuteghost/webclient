import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-add-appointment',
  templateUrl: './patient-add-appointment.component.html',
  styleUrls: ['./patient-add-appointment.component.scss']
})
export class PatientAddAppointmentComponent implements OnInit {
  appointmentData: any = {}; 

  constructor(private router: Router, private AppointmentsService: AppointmentsService) { }

  ngOnInit(): void {
  }
  onSaveButtonClick() {
    this.AppointmentsService.saveAppointment(this.appointmentData)
      .subscribe(
        (response) => {
          this.router.navigate(['/patient-appointments']);
         
        },
        (error) => {
          this.router.navigate(['/patient-appointments']);
        }
      );
}
}

