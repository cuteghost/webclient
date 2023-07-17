import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: [
    './topbar.component.scss',
    './../../../assets/lib/owlcarousel/assets/owl.carousel.min.css',
    './../../../assets/lib/animate/animate.min.css',
    './../../../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css',
    './../../../assets/lib/twentytwenty/twentytwenty.css',
    './../../../assets/css/style.css',
  ]
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
