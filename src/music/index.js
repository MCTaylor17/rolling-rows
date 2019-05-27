import MusicPlayer from "./MusicPlayer";

const welcome = new MusicPlayer([
    "src/music/Brewing-Potions_Rafael-Krux.mp3",
    "src/music/HippetyHop.mp3",
], .5);

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
    }
    play(name) {
        this.stop();
        this.songs[name].play();
    }
    stop() {
        Object.keys(this.songs).forEach(song => {
            this.songs[song].stop();
        });
    }
}

export default new Controller;

