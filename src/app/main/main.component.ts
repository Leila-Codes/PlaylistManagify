import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyUser } from '../models/spotify.user';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser: SpotifyUser | undefined

  constructor(private service: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    if (!this.service.isAuthCodeValid()) {
      this.router.navigateByUrl('/login');
    }

    this.service.getUserInfo().subscribe((userInfo) => {
      this.currentUser = userInfo;
    })
  }

}
