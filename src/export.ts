
export class song {
    public SongName: String;
    private Artist;
    private Duration_s;
    private Thumbnail;
    constructor(SongName, Artist, Duration_s, Thumbnail) {
        this.SongName = SongName;
        this.Artist = Artist;
        this.Duration_s = Duration_s;
        this.Thumbnail = Thumbnail;
    }
}

export function addSong(Song: song) {
    document.getElementById("ItemView")
}


// https://stackoverflow.com/a/10240297
function preloadImages(array: string[]): void {
    if (!(preloadImages as any).list) {
        (preloadImages as any).list = [];
    }
    const list: HTMLImageElement[] = (preloadImages as any).list;
    for (let i = 0; i < array.length; i++) {
        const img = new Image();
        img.onload = function (this: HTMLImageElement) {
            const index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded for memory consumption reasons
                list.splice(index, 1);
            }
        };
        list.push(img);
        img.src = array[i];
    }
}