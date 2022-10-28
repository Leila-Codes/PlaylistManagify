import { SpotifyImage } from "./spotify.image"


export class SpotifyUser {
    country: string = ''
    display_name: string = ''
    email: string = ''
    external_urls: Map<string, string> = new Map()
    href: string = ''
    id: string = ''
    images: SpotifyImage[] = []
}