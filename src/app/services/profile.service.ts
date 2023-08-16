import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { AuthService } from './auth-service/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getStaffProfile(): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.get(`${this.baseUrl}api/Staff/profile`, { headers });
  }

  updateStaffProfile(formData: any, userId: any, staffId: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.patch(`${this.baseUrl}api/Staff/update/${userId}/${staffId}`, formData, { headers });
  }

  changeProfilePassword(formData: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.patch(`${this.baseUrl}User/Auth/change-password`, formData, { headers })
  }

  loadMyProfile() : Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.get(`${this.baseUrl}api/Staff/profile`, { headers });
  }
  addExperience(formData: any) : Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.post(`${this.baseUrl}api/Experience/create`, formData, { headers });
  }
  addEducation(formData: any) : Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.post(`${this.baseUrl}api/Education/create`, formData, { headers });
  }
}
