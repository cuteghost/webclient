import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
      './home.component.scss',
      './../../../assets/lib/owlcarousel/assets/owl.carousel.min.css',
      './../../../assets/lib/animate/animate.min.css',
      './../../../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css',
      './../../../assets/lib/twentytwenty/twentytwenty.css',
      './../../../assets/css/style.css',

  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

