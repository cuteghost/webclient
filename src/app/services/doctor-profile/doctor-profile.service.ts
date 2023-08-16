import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfileData(): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.get<any>(`${this.apiUrl}api/Staff/profile`, { headers });
  }
}
