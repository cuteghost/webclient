import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  staffList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchStaffList();
  }

  fetchStaffList(): void {
    this.http.get<any[]>('https://api.example.com/staff').subscribe(
      (data) => {
        this.staffList = data;
      },
      (error) => {
        console.error('Error fetching staff list:', error);
      }
    );
  }
}