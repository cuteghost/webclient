import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  birthDate: string = '';
  jmbg: string = '';
  gender: string = '';
  email: string = '';
  password: string = '';
  joinedDate: string ='';
  certification: string='';
  education: string='';
  languages: string='';
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }
  addDoctor():void {
    const userObj = {
      firstName: this.firstName,      
      lastName: this.lastName,      
      birthDate: this.birthDate,      
      jmbg: this.jmbg,      
      gender: this.gender === 'Male' ? 0 : 1,           
      email: this.email,      
      password: this.password,
      joinedDate: this.joinedDate,
      certification: this.certification,
      education: this.education,
      languages: this.languages
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
