import { TestBed } from '@angular/core/testing';

import { AppointmentService } from './appointment.service';

describe('AppointementsService', () => {
  let service: AppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
