import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7179/User/Auth";
  private isLoggedInValue: boolean = false;

  constructor(private http: HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}/Register/patient`, userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}/Login`, loginObj).pipe(
      tap((res) => {
        // Store the token in localStorage
        localStorage.setItem('authToken', `Bearer ${res.token}`);
        // Set the isLoggedInValue to true
        this.isLoggedInValue = true;
      })
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.checkAuthentication().pipe(
      map(() => true),
      catchError((error) => {
        console.log(error);
        this.isLoggedInValue = false;
        localStorage.removeItem('authToken');
        return of(false);
      })
    );
  }

  checkAuthentication() {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/CheckAuthentication`, { headers });
  }

  getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('authToken') || '';
    // Create headers and set the Authorization header with the stored token
    const headers = new HttpHeaders().set('Authorization', authToken);
    console.log(headers)
    return headers;
  }

  logout() {
    // Clear the stored session token from localStorage
    localStorage.removeItem('authToken');
    this.isLoggedInValue = false;
    // Perform any additional cleanup or logout actions here
  }
}