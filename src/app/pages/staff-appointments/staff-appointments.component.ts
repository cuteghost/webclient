import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-staff-appointments',
  templateUrl: './staff-appointments.component.html',
  styleUrls: ['./staff-appointments.component.scss']
})
export class StaffAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  filteredAppointments: any[] = [];
  searchTerm: string = '';
  selectedAppointmentId: number | null = null;

  constructor(private AppointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.AppointmentsService.getAppointment().subscribe(
      (appointments) => {
        this.appointments = appointments;
        this.filteredAppointments = appointments;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onOpenChangeStatusModal(appointmentId: number) {
    this.selectedAppointmentId = appointmentId;
  }
  
  onSaveStatusClick() {
    const newStatus = (document.getElementById('statusSelect') as HTMLSelectElement).value;

    if (this.selectedAppointmentId) {
      this.AppointmentsService.changeAppointmentStatus(this.selectedAppointmentId, newStatus)
        .subscribe(
          (response) => {
            console.log('Status changed successfully', response);
            this.fetchAppointments();
            // Update appointments list or perform other actions as needed
          },
          (error) => {
            console.error('Error changing status', error);
          }
        );

      this.selectedAppointmentId = null; // Clear the selected ID
    }
  }
}