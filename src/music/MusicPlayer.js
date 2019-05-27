import { Howl } from 'howler';

class MusicPlayer {
    constructor(src,vol) {
        this.music = null;
        this.src = src;
        this.vol = vol;
    }

    lazyLoad() {
        if(!this.music) {
            this.music = new Howl({
                src: this.src,
                loop: true,
                volume: this.vol,
                onfade: function(id) {
                    console.log("Fire",id);
                }
            });
        }
    }

    play() {
        this.lazyLoad();
        console.log(this.music.volume());
        const curVol = this.music.volume();
        const vol = this.vol;
        if(curVol < vol) {
            this.music.fade(curVol, vol, 5000);
        }

        if(this.music.playing()) {
            return this.music;
        }

        return this.music.play();
    }

    volume(vol) {
        this.vol = vol;
        if(this.music) {
            return this.music.volume(vol);
        }
    }

    stop() {
        if(!this.music) {
            return;
        }
        return this.music.fade(this.music.volume(), 0, 1500);
    }
}

export default MusicPlayer;