import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { SpotifyUser } from '../models/spotify.user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input('user') user: SpotifyUser | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
