import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { OnInit } from '@angular/core'
import { SpotifyService } from './spotify.service';
import { SpotifyUser } from './models/spotify.user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PlaylistManagify';

  spotify = faSpotify

  currentUser: SpotifyUser | undefined;

  constructor() { }


  ngOnInit(): void {

  }
}
