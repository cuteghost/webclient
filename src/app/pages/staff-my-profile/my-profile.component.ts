import { Component, OnInit } from '@angular/core';
import { DoctorProfileService } from '../../services/doctor-profile/doctor-profile.service'; // Import the service to fetch data

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  birthDate: string = '';
  gender: string = '';
  education: any[] = [];
  certification: any[] = [];
  title: string = 'Doctor';

  constructor(private doctorProfileService: DoctorProfileService) {} // Inject the service

  ngOnInit(): void {
    // Fetch the profile data from the API and assign it to component properties
    this.doctorProfileService.getProfileData().subscribe(
      (profileData) => {
        this.firstName = profileData.firstName;
        this.lastName = profileData.lastName;
        this.email = profileData.email;
        this.birthDate = profileData.birthDate;
        this.gender = profileData.gender === 1 ? 'Female' : 'Male';;
        this.education = profileData.education;
        this.certification = profileData.certification;
      },
      (error) => {
        console.error('Error fetching profile data', error);
      }
    );
  }
}