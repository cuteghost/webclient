import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

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

  ngOnInit(): void {
  }
  addPatient():void {
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
