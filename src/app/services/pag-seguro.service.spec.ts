import { TestBed } from '@angular/core/testing';

import { PagSeguroService } from './pag-seguro.service';

describe('PagSeguroService', () => {
  let service: PagSeguroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagSeguroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
