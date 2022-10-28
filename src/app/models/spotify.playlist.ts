import { SpotifyImage } from "./spotify.image"
import { SpotifyTrack } from "./spotify.track"

export class SpotifyPartialUser {
    id: string = ''
    display_name: string = ''
}

export class SpotifyTrackWrapper {
    track: SpotifyTrack = new SpotifyTrack
}

export class SpotifyPlaylistTrackObject {
    href: string = ''
    items: SpotifyTrackWrapper[] = []
    limit: number = 0
    next: string = ''
    offset: number = 0
    previous: string = ''
    total: number = 0
}

export class SpotifyPlaylist {
    id: string = ''
    images: SpotifyImage[] = []
    name: string = ''
    description: string = ''
    owner: SpotifyPartialUser = new SpotifyPartialUser()
    href: string = ''
    tracks: SpotifyPlaylistTrackObject = new SpotifyPlaylistTrackObject()
    selected: boolean = false

    constructor() { }
}