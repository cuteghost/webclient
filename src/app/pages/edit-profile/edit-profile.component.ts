import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profileData: any = {}
  oldPassword!: string;
  newPassword!: string;

  newExperience: any = {
    title: '',
    workPlace: '',
    from: '',
    to: '',
    locationId: '',
    staffId: 'DR-0001' // You can set the staffId here
  };

  newEducation: any = {
    title: '',
    school: '',
    from: '',
    to: '',
    locationId: '',
    staffId: ''
  };
//=========================================================================================================================
  experienceForm: FormGroup;
  experienceFormControl: FormControl = new FormControl('');
  titleOptions: string[] = ['Doctor', 'Nurse', 'Assistant']; 
//=========================================================================================================================

  constructor(private router: Router, private profile: ProfileService, private formBuilder: FormBuilder) {
    this.experienceForm = this.formBuilder.group({
      titleControl:  new FormControl('')
    });
   }

  ngOnInit(): void {
    this.fetchData();
    
  }
  fetchData() {
    this.profile.getStaffProfile().subscribe(
      (response) => {
        console.log(response);
        this.profileData = response;
      },
      (error) => {
        console.error('Error fetching profile data', error)
      }
    );
  }
  saveProfile() {
    const formData = {
      firstName: this.profileData.firstName,
      lastName: this.profileData.lastName,
      jmbg: this.profileData.jmbg,
      birthDate: this.profileData.birthDate,
      email: this.profileData.email,
      gender: this.profileData.gender,
    }
    this.profile.updateStaffProfile(formData, this.profileData.id, this.profileData.staffId).subscribe(
      (response) => {
        console.log(response);
        alert('Profile Updated Successfully');
      },
      (error) => {
        console.error('Error updating profile data', error);
      }
    );
  }

  changePassword(){
    const changePassData = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    };
    this.profile.changeProfilePassword(changePassData).subscribe(
      (response) => {
        console.log(response);
        alert('Password Changed Successfully');
      },
      (error) => {
        console.error('Error updating profile data', error);
      }
    );

  }

  addExperience() {
    this.newExperience.staffId = this.profileData.staffId;
    this.profile.addExperience(this.newExperience).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error adding experience', error)
      }
    )
  }

  addEducation() {
    this.newEducation.staffId = this.profileData.staffId;
    this.profile.addEducation(this.newEducation).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error adding experience', error)
      }
    )
  }


  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (event && event.option) {
      this.experienceForm.get('titleControl')?.setValue(event.option.viewValue);
    }
  }
}
