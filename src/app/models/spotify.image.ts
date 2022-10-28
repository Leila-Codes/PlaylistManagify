export class SpotifyImage {
    url: string
    height: number
    width: number

    constructor(url: string, width: number, height: number) {
        this.url = url;
        this.width = width;
        this.height = height;
    }
}