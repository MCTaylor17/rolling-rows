import MusicPlayer from "./MusicPlayer";
import headphoneProximity$ from "../headphones";

const welcome = new MusicPlayer([
    "src/music/Brewing-Potions_Rafael-Krux.mp3",
    "src/music/HippetyHop.mp3",
], .5);

// Adjust welcome volume relative to headphones
headphoneProximity$.subscribe(proximity => welcome.volume(Math.pow(proximity,3)));

const story = new MusicPlayer([
    "src/music/One-Step-Closer_Rafael-Krux.mp3",
], .5);

const ending = new MusicPlayer([
    "src/music/Orquesta-Antimanierista_Saturaction_01_Paulm.ogg",
    "src/music/Orquesta-Antimanierista_Saturaction_01_Paulm.mp3"
], .5);    

const eery = new MusicPlayer([
    "src/music/Orquesta-Antimanierista_Saturaction_04_Sueno-Vertical.ogg",
    "src/music/Orquesta-Antimanierista_Saturaction_04_Sueno-Vertical.mp3"
], .5);    


class Controller {
    constructor() {
        this.songs = { welcome, story, ending, eery }
        this.mute = false;
        this.current = "welcome";
    }
    play(name) {
        this.current = name;
        this.stop();
        this.songs[name].play();
    }
    stop() {
        Object.keys(this.songs).forEach(song => {
            this.songs[song].stop();
        });
    }
    toggleMute() {
      this.mute = !this.mute;
      if(this.mute) {
        this.stop();
      } else {
        console.log(this.current);
        this.play(this.current);
      }
    }
}

export default new Controller;

