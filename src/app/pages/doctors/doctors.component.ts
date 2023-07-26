import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from '../../services/doctors.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: any[]= []; // Assuming the patients array contains patient objects with name, age, address, phone, and email properties
  filteredDoctors: any[] = []; // Contains filtered patients
  searchTerm: string = ''; // Holds the value of the search input
  constructor(private router: Router, private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.fetchDoctors()
  }
   
  fetchDoctors(){
  this.doctorsService.getDoctors().subscribe(
    (doctors) => {
      this.doctors = doctors;
      this.filteredDoctors = doctors; // Set filteredPatients to the initial list of patients
    },
    (error) => {
      console.error(error);
    }
  );
}

      filterDoctors(): void {
        if (this.searchTerm.trim() === '') {
          // If the search term is empty, show all patients
          this.filteredDoctors = this.doctors;
        } else {
          // If the search term is not empty, filter patients by their name
          this.filteredDoctors = this.doctors.filter((doctor: any) => {
            const fullName = doctor.firstName + ' ' + doctor.lastName;
            return fullName.toLowerCase().includes(this.searchTerm.toLowerCase());
          });
        }
      }
      calculateAge(birthDate: string): number {
        // Parse the birthDate into a Date object
        const birthDateObj = new Date(birthDate);
      
        // Get the current date
        const today = new Date();
      
        // Calculate the time difference between today and the birthDate in milliseconds
        const timeDiff = today.getTime() - birthDateObj.getTime();
      
        // Convert the time difference to years
        const age = timeDiff / (1000 * 60 * 60 * 24 * 365.25); // A year is approximately 365.25 days
      
        // Round the age to a whole number
        return Math.floor(age);
      }
      navigateToDoctor(doctorId: number): void {
        // Navigate to the patient page with the patient's ID
        this.router.navigate(['/doctor', doctorId]);
      }

}
