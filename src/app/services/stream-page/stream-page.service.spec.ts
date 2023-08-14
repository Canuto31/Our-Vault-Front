import { TestBed } from '@angular/core/testing';

import { StreamPageService } from './stream-page.service';

describe('StreamPageService', () => {
  let service: StreamPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
