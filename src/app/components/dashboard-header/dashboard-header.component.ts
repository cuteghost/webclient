import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: [
    './dashboard-header.component.scss',
    '../../../assets/css/authenticated-style.css',
    '../../../assets/css/font-awesome.min.css'
  ]
})
export class DashboardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
