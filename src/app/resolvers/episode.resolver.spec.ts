import { TestBed } from '@angular/core/testing';

import { EpisodeResolver } from './episode.resolver';

describe('EpisodeResolver', () => {
  let resolver: EpisodeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EpisodeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
