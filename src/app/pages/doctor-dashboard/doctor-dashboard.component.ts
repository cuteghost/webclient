import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: [
    './doctor-dashboard.component.scss',
    '../../../assets/css/authenticated-style.css',
    '../../../assets/css/font-awesome.min.css',
    '../../../assets/css/bootstrap.min.css',
    ]
})
export class DoctorDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
