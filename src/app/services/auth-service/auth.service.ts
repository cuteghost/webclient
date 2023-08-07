import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.apiUrl;
  private isLoggedInValue: boolean = false;

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}User/Auth/Register/patient`, userObj);
    
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}User/Auth/Login`, loginObj).pipe(
      tap((res) => {
        // Store the token in localStorage
        localStorage.setItem('authToken', `Bearer ${res.token}`);
        // Set the isLoggedInValue to true
        this.isLoggedInValue = true;

        const decodedToken = this.jwtHelper.decodeToken(res.token);
        
        const userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

        const isStaff = userRole === 'true';
        
        if(isStaff) {
          this.router.navigate(['/dashboard']);
        }
        else {
          this.router.navigate(['patient-dashboard']);
        }
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
    return this.http.get(`${this.baseUrl}User/Auth/CheckAuthentication`, { headers });
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
  createStaff(userObj: any): Observable<any> {
    const apiUrl = `${this.baseUrl}api/Staff/create`;
    const headers = this.getHeaders();
    return this.http.post<any>(apiUrl, userObj, { headers });

  }
}