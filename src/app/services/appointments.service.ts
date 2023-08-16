import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service/auth.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAppointment(): Observable<any[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<any[]>(`${this.baseUrl}api/Appointment`, { headers });
  }
  saveAppointment(appointmentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/Appointment/create`, appointmentData);
  }
  changeAppointmentStatus(id: number, newStatus: string): Observable<any> {
    const headers = this.authService.getHeaders();
    const requestBody = {
      id: id,
      appointmentStatus: newStatus,
    };
    return this.http.patch(`${this.baseUrl}api/Appointment/change-status`, requestBody, { headers });
  }

  getPatients(): Observable<any[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<any[]>(`${this.baseUrl}api/Patient/all`, { headers }); 
  }

  getDoctors(): Observable<any[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<any[]>(`${this.baseUrl}api/Staff/get-all`, { headers });
  }

  updateAppointment(editedAppointment: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.patch(`${this.baseUrl}api/Appointment/update`, editedAppointment, { headers });
  }
  deleteAppointment(appointmentId: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.delete(`${this.baseUrl}api/Appointment/delete/${appointmentId}`, { headers })
  }
}