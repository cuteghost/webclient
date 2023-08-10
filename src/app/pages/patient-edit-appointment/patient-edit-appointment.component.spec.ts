import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditAppointmentComponent } from './patient-edit-appointment.component';

describe('PatientEditAppointmentComponent', () => {
  let component: PatientEditAppointmentComponent;
  let fixture: ComponentFixture<PatientEditAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
