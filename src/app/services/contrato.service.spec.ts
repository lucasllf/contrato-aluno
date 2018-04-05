import { TestBed, inject } from '@angular/core/testing';

import { ContratoService } from './contrato.service';

describe('ContratoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContratoService]
    });
  });

  it('should be created', inject([ContratoService], (service: ContratoService) => {
    expect(service).toBeTruthy();
  }));
});
