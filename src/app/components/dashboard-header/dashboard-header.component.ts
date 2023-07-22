import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

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

  constructor(private authServie: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authServie.logout();
  }
}
