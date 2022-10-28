import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class SpotifyInterceptor implements HttpInterceptor {

  constructor(private service: SpotifyService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(environment.spotifyBaseUrl)) {
      const authCode = this.service.getAuthCode();
      if (authCode && authCode.length > 0) {
        request = request.clone({
          headers: request.headers.append('Authorization', `Bearer ${authCode}`)
        })
      }
    }


    return next.handle(request);
  }
}
