import { Component } from '@angular/core';
import { error } from 'console';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  birthDate: string = '';
  jmbg: string = '';
  gender: string = '';
  address: string = '';
  telephone: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  signup() {
    const userObj = {
      firstName: this.firstName,      
      lastName: this.lastName,      
      birthDate: this.birthDate,      
      jmbg: this.jmbg,      
      gender: this.gender === 'Male' ? 0 : 1,      
      address: this.address,      
      telephone: this.telephone,      
      email: this.email,      
      password: this.password    
    }
    this.authService.signUp(userObj).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error('Sign-up Error', error)
      })
  }
}
