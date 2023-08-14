import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staff-appointments',
  templateUrl: './staff-appointments.component.html',
  styleUrls: ['./staff-appointments.component.scss']
})
export class StaffAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  filteredAppointments: any[] = [];
  searchTerm: string = '';
  editData: any = {};

  patients: any[] = []; // Array to store patient names
  doctors: any[] = []; // Array to store doctor names
  
  selectedAppointmentId: number | null = null;
  selectedAppointment: any | null = null;

  editForm!: FormGroup;

  constructor(private AppointmentsService: AppointmentsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchAppointments();
    this.editForm = this.fb.group({
      patientId: [null],
      staffId: [null],
      date: [null],
      appointmentStatus: [null]
    });

    if (this.selectedAppointment) {
      const dateValue = new Date(this.selectedAppointment.date).toISOString().substring(0, 16);
      this.editForm.patchValue({
        appointmentId: this.selectedAppointment.id,
        patientId: this.selectedAppointment.patientId,
        staffId: this.selectedAppointment.staffId,
        date: new Date(this.selectedAppointment.date),
        appointmentStatus: this.selectedAppointment.status,
        // Populate other fields as needed
      });
    }
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
  onSaveEditAppointment(editData: any) {
    const formData = this.editForm.value;
    if(formData)
    {
      this.AppointmentsService.updateAppointment(formData)
      .subscribe(
        (response) => {
          this.fetchAppointments();
        },
        (error) => {

        }
      );
    }

  }

  onOpenEditAppointmentModal(appointment: any) {
    this.selectedAppointment = appointment;
    this.loadDoctors();
    this.loadPatients();

    const dateValue = new Date(this.selectedAppointment.date).toISOString().substring(0, 16);
    this.editForm.patchValue({
      patientId: this.selectedAppointment.patientId,
      staffId: this.selectedAppointment.staffId,
      date: dateValue,
      appointmentStatus: this.selectedAppointment.appointmentStatus
    });
  }
  loadPatients() {
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
    this.AppointmentsService.getDoctors().subscribe(
      (response) => {
        this.doctors = response; // Store doctor names
      },
      (error) => {
        console.error('Error loading doctors', error);
      }
    );
  }
  onOpenDeleteAppointmentModal(appointmentId: any) {
    this.selectedAppointmentId = appointmentId;
  }
  onDeleteAppointmentClick() {
    console.log(this.selectedAppointmentId);
    if (this.selectedAppointmentId) {
        this.AppointmentsService.deleteAppointment(this.selectedAppointmentId)
            .subscribe(
                (response) => {
                    console.log('Appointment deleted successfully', response);
                    // Optionally, update the appointments list or perform other actions as needed
                    this.fetchAppointments();
                },
                (error) => {
                    console.error('Error deleting appointment', error);
                }
            );
        this.selectedAppointmentId = null; // Clear the selected ID
    }
}
}