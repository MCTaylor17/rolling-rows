import { Howl } from 'howler';

class MusicPlayer {
    constructor(src,vol) {
        this.music = null;
        this.src = src;
        this.vol = vol;
        this.volTimeout = null;
    }

    lazyLoad() {
        if(!this.music) {
            this.music = new Howl({
                src: this.src,
                loop: true,
                volume: this.vol,
                onvolume: function(id) {
                  clearTimeout(this.volTimeout);
                  this.volTimeout = setTimeout(()=> {
                    if(this.volume() === 0) {
                      this.stop();
                    }
                  },1000);
                }
            });
        }
    }

    play() {
        this.lazyLoad();
        if(!this.music.playing()) {
            this.music.play();
        }
        this.fadeIn();
      
        return this.music;
    }
  
    fadeIn() {
      const curVol = this.music.volume();
      const vol = this.vol;
      if(curVol < vol) {
        this.music.fade(curVol, vol, 5000);
      }
      
      return this.music;
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