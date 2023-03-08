import { TestBed } from '@angular/core/testing';

import { FormConfigService } from './form.config.service';

describe('FormConfigService', () => {
  let service: FormConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
