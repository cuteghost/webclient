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
  adress: string = '';
  telephone: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  signup() {
    console.log("test");
    const userObj = {
      firstName: this.firstName,      
      lastName: this.lastName,      
      birthDate: this.birthDate,      
      jmbg: this.jmbg,      
      gender: this.gender === 'Male' ? 0 : 1,      
      adress: this.adress,      
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
