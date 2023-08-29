import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth-service/auth.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = environment.apiUrl;

  constructor(private authService: AuthService, private http: HttpClient) { }

  getInvoices(): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.get(`${this.apiUrl}api/Invoice`, { headers });
  }
  getPatients(): Observable<any[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}api/Patient/all`, { headers }); 
  }
  getTreatments() : Observable<any[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}api/Treatment`, { headers }); 
  }
  updateTreatment(treatmentId: any, updateData: any) {
    const url = `/api/Treatment/${treatmentId}`;
    return this.http.patch(`${this.apiUrl}api/Treatment/invoice/${treatmentId}`, updateData);
  }
  initInvoice(data: any) {
    const headers = this.authService.getHeaders();
    return this.http.post(`${this.apiUrl}api/Invoice/create`, data, { headers });
  }
}
