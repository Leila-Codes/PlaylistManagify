import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  spotifyIcon = faSpotify;
  loadingIcon = faSpinner;

  isLoading = false;

  constructor(private service: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    if (location.hash && location.hash.length > 0) {
      this.isLoading = true;
      const hashParams = new Map();
      location.hash.split("&")
        .map(argumentPair => argumentPair.split("="))
        .forEach((pair) => {
          hashParams.set(pair[0], pair[1])
        });

      this.service.setAuthCode(hashParams.get("#access_token"));
      this.router.navigateByUrl('/');
    }
  }

  openSpotifyLogin(): void {
    const apiUrl = new URL("https://accounts.spotify.com/authorize")
    apiUrl.searchParams.set('client_id', environment.client_id);
    apiUrl.searchParams.set('response_type', 'token');
    apiUrl.searchParams.set('redirect_uri', environment.redirect_uri);
    apiUrl.searchParams.set('scope', environment.required_scopes);
    apiUrl.searchParams.set('show_dialog', 'true');

    window.location.href = apiUrl.toString();
  }

}
