import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {

  private apiUrl = 'https://localhost:7179/api/Staff/profile'; // Replace with your API endpoint URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfileData(): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
