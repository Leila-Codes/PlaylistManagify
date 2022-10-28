import { Component, OnInit } from '@angular/core';
import { SpotifyPlaylist, SpotifyPlaylistTrackObject } from '../models/spotify.playlist';
import { PlaylistService } from '../playlist.service';

import {
  trigger,
  query,
  stagger,
  style,
  animate,
  transition
} from '@angular/animations'
import { SpotifyTrack } from '../models/spotify.track';

@Component({
  selector: 'app-playlist-panel',
  templateUrl: './playlist-panel.component.html',
  styleUrls: ['./playlist-panel.component.css'],
  animations: [
    trigger('glitchIn', [
      transition("* => *", [
        query(":enter", [
          style({ opacity: '0' }),
          stagger(100, [
            animate('.5s linear', style({ opacity: '1' }))
          ])
        ])])
    ])
  ]
})
export class PlaylistPanelComponent implements OnInit {
  playlists: SpotifyPlaylist[] = []

  constructor(private playlist: PlaylistService) { }

  ngOnInit(): void {
    this.playlist.newPlaylistEvents.subscribe((plistId: string) => {
      this.playlists.push(this.playlist.getData(plistId));
      this.detectDuplicates();
    })
  }

  detectDuplicates() {
    const visitedSongs = new Map<string, SpotifyTrack>(),
      duplicateSongs = new Set<string>();

    for (let plist of this.playlists) {
      for (let track of plist.tracks.items) {
        if (!visitedSongs.has(track.track.id)) {
          visitedSongs.set(track.track.id, track.track);
        } else {
          duplicateSongs.add(track.track.id);
          visitedSongs.get(track.track.id)!.duplicated = true;
          track.track.duplicated = true;
        }
      }
    }
  }

}
