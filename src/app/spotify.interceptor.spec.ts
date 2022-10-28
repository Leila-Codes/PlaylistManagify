import { TestBed } from '@angular/core/testing';

import { SpotifyInterceptor } from './spotify.interceptor';

describe('SpotifyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpotifyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SpotifyInterceptor = TestBed.inject(SpotifyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
