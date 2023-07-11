import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  staffForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.staffForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      jmbg: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      staffId: ['', Validators.required],
      joined: ['', Validators.required],
      certification: [''],
      education: [''],
      languages: ['']
    });
  }

  onSubmit() {
    if (this.staffForm.valid) {
      const genderValue = this.staffForm.value.gender === 'male' ? 0 : 1;
      const staffData = {
        firstName: this.staffForm.value.firstName,
        lastName: this.staffForm.value.lastName,
        birthDate: this.staffForm.value.birthDate,
        jmbg: this.staffForm.value.jmbg,
        gender: genderValue,
        email: this.staffForm.value.email,
        staffId: this.staffForm.value.staffId,
        joined: this.staffForm.value.joined,
        certification: this.staffForm.value.certification,
        education: this.staffForm.value.education,
        languages: this.staffForm.value.languages
      };
      // Use the staffData object as needed (e.g., send to backend API, etc.)
      console.log(staffData);
      this.staffForm.reset();
    }
  }

  onDeleteAccount() {

  }
}