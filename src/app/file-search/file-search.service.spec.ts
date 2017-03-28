import { TestBed, inject } from '@angular/core/testing';

import { FileSearchService } from './file-search.service';

describe('FileSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSearchService]
    });
  });

  it('should ...', inject([FileSearchService], (service: FileSearchService) => {
    expect(service).toBeTruthy();
  }));
});
