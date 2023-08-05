import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBlogsComponent } from './patient-blogs.component';

describe('PatientBlogsComponent', () => {
  let component: PatientBlogsComponent;
  let fixture: ComponentFixture<PatientBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
