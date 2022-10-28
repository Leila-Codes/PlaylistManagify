import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { SpotifyUser } from './models/spotify.user';
import { Observable } from 'rxjs'
import { map, filter } from 'rxjs/operators'
import { SpotifyPlaylist } from './models/spotify.playlist';
import { SpotifyApiResponse } from './models/spotify.api';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private authCode: string = "";

  constructor(private http: HttpClient) { }

  setAuthCode(code: string): void {
    this.authCode = code;
    localStorage.setItem('$authCode', this.authCode);
  }

  isAuthCodeValid(): boolean {
    const savedCode = localStorage.getItem('$authCode');
    if (savedCode && savedCode.length > 0) {
      this.authCode = savedCode;
      return true;
    }
    // TODO: Test the auth code with the API.
    return false;
  }

  getAuthCode(): string {
    return this.authCode;
  }

  getUserInfo(): Observable<SpotifyUser> {
    return this.http.get<SpotifyUser>(`${environment.spotifyBaseUrl}/me`);
  }

  listUserPlaylists(offset: number = 0, limit: number = 50): Observable<SpotifyPlaylist[]> {
    return this.http.get<SpotifyApiResponse>(`${environment.spotifyBaseUrl}/me/playlists`, {
      params: {
        'offset': offset,
        'limit': limit
      }
    }).pipe(
      map((v => v.items))
    )
  }

  loadPlaylist(id: string): Observable<SpotifyPlaylist> {
    return this.http.get<SpotifyPlaylist>(`${environment.spotifyBaseUrl}/playlists/${id}`)
  }

}