import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.scss']
})
export class PatientsPageComponent implements OnInit {
  patients: any[]= []; // Assuming the patients array contains patient objects with name, age, address, phone, and email properties

  constructor(private router: Router, private patientService: PatientService) {}

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients() {
    this.patientService.getPatients().subscribe(
      (patients) => {
        this.patients = patients;
      },
      (error) => {
        console.error(error);
      }
    );
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
  // Implement edit and delete logic here based on your requirements
}