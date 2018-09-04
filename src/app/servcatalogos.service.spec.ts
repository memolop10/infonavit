import { TestBed, inject } from '@angular/core/testing';

import { ServcatalogosService } from './servcatalogos.service';

describe('ServcatalogosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServcatalogosService]
    });
  });

  it('should be created', inject([ServcatalogosService], (service: ServcatalogosService) => {
    expect(service).toBeTruthy();
  }));
});
