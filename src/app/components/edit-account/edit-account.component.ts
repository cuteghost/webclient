import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  accountForm: FormGroup;
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.accountForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      jmbg: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData() {
    const url = 'http://localhost:5257/api/patient'; // or 'http://localhost:5257/api/staff';
    
    this.http.get<any>(url, { headers: this.authService.getHeaders() }).subscribe(
      (data) => {
        this.accountForm.patchValue({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          birthDate: data.birthDate,
          jmbg: data.jmbg,
          address: data.address,
          telephone: data.telephone,
          gender: data.gender
        });
      },
      (error) => {
        console.log('Error fetching user data:', error);
      }
    );
  }

  saveChanges() {
    if (this.accountForm.invalid) {
      return;
    }
    
    const formValues = this.accountForm.value;
    const genderValue = formValues.gender === 'male' ? 0 : 1;

    // Update the gender value in the form
    formValues.gender = genderValue;

    const url = 'http://localhost:5257/api/patient/update'; // or 'http://localhost:5257/api/staff/update';
    const formData = this.accountForm.value;
    
    this.http.patch<any>(url, formData, { headers: this.authService.getHeaders() }).subscribe(
      (data) => {
        console.log('Account details updated successfully:', data);
        // Perform any additional actions after the account is updated
      },
      (error) => {
        console.log('Error updating account details:', error);
      }
    );
  }

  changePassword() {
    if (this.passwordForm.invalid) {
      return;
    }
    
      const url = 'http://localhost:5257/User/Auth/change-password'; // or 'http://localhost:5257/api/staff/password-update';
      const formData = this.passwordForm.value;
  
      this.http.patch<any>(url, formData, { headers: this.authService.getHeaders() }).subscribe(
        (data) => {
          console.log('Password changed successfully:', data);
          // Perform any additional actions after the password is changed
        },
        (error) => {
          console.log('Error changing password:', error);
        }
      );
  }
}