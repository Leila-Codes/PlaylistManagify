import { Component, OnInit } from '@angular/core';
import { SpotifyPlaylist } from '../models/spotify.playlist';
import { SpotifyService } from '../spotify.service';
import { FormControl } from '@angular/forms'
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-search',
  templateUrl: './playlist-search.component.html',
  styleUrls: ['./playlist-search.component.css']
})
export class PlaylistSearchComponent implements OnInit {
  playlistLibrary: SpotifyPlaylist[] = []
  listResults: SpotifyPlaylist[] = [];

  playlistNameEntry = new FormControl('')

  constructor(private service: SpotifyService, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    /// load all playlists
    this.playlistLibrary = [];

    // this.service.listUserPlaylists().subscribe((lists: SpotifyPlaylist[]) => {
    //   this.playlistLibrary = this.playlistLibrary.concat(lists);
    // });

    for (let i = 0; i < 12; i++) {
      this.service.listUserPlaylists(i * 50, 50).subscribe((lists: SpotifyPlaylist[]) => {
        this.playlistLibrary = this.playlistLibrary.concat(lists);
      })
    }
  }

  performSearch(): void {
    const searchTerm = this.playlistNameEntry.value || '';
    if (searchTerm.length < 1) {
      this.listResults = [];
    } else {
      this.listResults = this.playlistLibrary.filter(l => {
        return l.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    }

  }

  selectPlaylist(id: string) {
    this.playlistService.addPlaylist(id);
    this.playlistNameEntry.patchValue('');
    this.listResults.length = 0;
  }

}
