import { SpotifyImage } from "./spotify.image"

export class SpotifyAlbum {
    album_type: string = ""
    total_tracks: number = 0
    id: string = ""
}

export class SpotifyArtist {
    external_urls: { spotify: string } | undefined
    genres: string[] = []
    href: string = ""
    id: string = ""
    images: SpotifyImage[] = []
    name: string = ""
    type: string = ""
}

export class SpotifyTrack {
    external_urls: { spotify: string } | undefined
    album: SpotifyAlbum | null = null
    artists: SpotifyArtist[] = []
    href: string = ""
    id: string = ""
    name: string = ""
    preview_url: string = ""
    track_number: number = 0
    type: string = ""
    uri: string = ""

    duplicated: boolean = false
}