import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private baseUrl: string = 'https://localhost:7179/api/Appointment'; // Replace this with your backend API URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAppointment(): Observable<any[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<any[]>(this.baseUrl, { headers });
  }
  saveAppointment(appointmentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, appointmentData);
  }

  
}