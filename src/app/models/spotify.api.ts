export interface SpotifyApiResponse {
    href: string
    items: any[]
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
}