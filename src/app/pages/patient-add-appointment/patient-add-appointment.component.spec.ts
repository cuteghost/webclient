import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddAppointmentComponent } from './patient-add-appointment.component';

describe('PatientAddAppointmentComponent', () => {
  let component: PatientAddAppointmentComponent;
  let fixture: ComponentFixture<PatientAddAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAddAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
