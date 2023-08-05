import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss',
    '../../../assets/css/authenticated-style.css',
  '../../../assets/css/font-awesome.min.css',
  '../../../assets/css/bootstrap.min.css',
  ]
})
export class PatientDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
