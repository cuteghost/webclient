import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.scss',
  '../../../assets/css/authenticated-style.css',
  '../../../assets/css/font-awesome.min.css'
]
})
export class PatientSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
