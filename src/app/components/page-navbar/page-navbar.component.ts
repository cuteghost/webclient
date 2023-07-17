import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-navbar',
  templateUrl: './page-navbar.component.html',
  styleUrls: [
    './page-navbar.component.scss',
    './../../../assets/lib/owlcarousel/assets/owl.carousel.min.css',
    './../../../assets/lib/animate/animate.min.css',
    './../../../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css',
    './../../../assets/lib/twentytwenty/twentytwenty.css',
    './../../../assets/css/style.css',
  ]
})
export class PageNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
