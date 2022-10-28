import { Injectable } from '@angular/core';
import { SpotifyPlaylist } from './models/spotify.playlist';
import { SpotifyService } from './spotify.service';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  selectedPlaylists: string[] = []
  playlistData: SpotifyPlaylist[] = []

  newPlaylistEvents = new EventEmitter<string>();

  constructor(private service: SpotifyService) { }

  addPlaylist(id: string) {
    if (!this.selectedPlaylists.includes(id)) {
      this.selectedPlaylists.push(id);

      this.service.loadPlaylist(id).subscribe((pListData) => {
        this.playlistData.push(pListData);
        this.newPlaylistEvents.emit(id);
      })
    }
  }

  removePlaylist(id: string) {
    const playlistIndex = this.playlistData.findIndex(i => i.id === id);
    if (playlistIndex >= 0) {
      this.playlistData.splice(playlistIndex, 1);
    }
  }

  getData(id: string): SpotifyPlaylist {
    return this.playlistData.find(l => l.id === id)!;
  }
}
