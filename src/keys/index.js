/////////////////
//Design Intent//
/////////////////

// Play audio notes in sync with middleRow;
// Each row is considered 1 bar?  Octave?  Oy...
// The 2011 article paints a better picture.

// SMOOTHING:
// If not built into a library, consider using...
// scroll deltas and moving averages to smooth
// out note durations.
// Think:
// scrollDelta = scrollTop - lastScrollTop;
// rowDelta = scrollDelta / (rowHeight + gutters);
// rowDelta = middleRow - lastMiddleRow;
// Or:
// [ ms/row | ms per row | mspr ]
// scrollRate = timeDelta / rowDelta 
// Try:
// Schedule sound before event?
// Post message to web worker?

/////////////
//Resources//
/////////////
// Overview:
// The following link seems old (2011) but a good introduction to the principles of the Music API
//   https://www.html5rocks.com/en/tutorials/webaudio/intro/

// Synthesizer
// Create sounds with the Web Audio oscillator
//   https://marcgg.com/blog/2016/11/01/javascript-audio/


           ///////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
           //               LIBRARIES                  \\
           ///////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
           //  ST*RS || ♫ NOTES ♫                      \\
//////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Howler  // 14_279 || Easily work with audio files   \\
// Tone    //  8_121 || Super simple synthesizer       \\
// soundjs //  3_599 || Have not looked yet            \\
//////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                                    // I have issues...\\
                                    //\\\\\\\\\\\\\\\\\\\

/* Testing Overload before load:
import {Howl} from "howler";

const inter = setInterval(() => {
  console.log("played",sound.play())
  console.log("played",sound.play())
  console.log("played",sound.play())
  console.log("played",sound.play())
  console.log("played",sound.play())
  console.log("played",sound.play())
});
var sound = new Howl({
  src: ["./src/styles/piano-keys/key01.mp3"],
  onload: () => clearInterval(inter)
});
*/


////////////////
//Module Start//
////////////////
import {Howl, Howler} from 'howler';
import { from, combineLatest, interval  } from "rxjs";
import { tap, startWith } from 'rxjs/operators';

// @returns Array of paths where the sep string is replaced with a zero prefixed number from 1 through N inclusive
const makeNPaths = (N, string, sep) => {
  const zeroPrefix = i => {
    return i <= 9 ? "0" + i : "" + i;
  };
  let p = new Array(N).fill(null);
  const nPaths = p.map((_, i) => {
    return string.split(sep).join(zeroPrefix(i + 1))
  });
  
  console.log("WORKING", nPaths);
  return nPaths;
};
const numberOfKeys = 24;
const keyPaths = makeNPaths(numberOfKeys, "../src/keys/key$.mp3", "$");
    console.log({keyPaths});

const keyboard = keyPaths.map(keyPath => {
  return new Howl({src: keyPath});
});

const playKey = (current, prev, fadeDuration) => {
  const currKey = keyboard[current % numberOfKeys];
  const prevKey = keyboard[prev % numberOfKeys]
  currKey.volume(1).play();
  prevKey.fade(1,0,fadeDuration + 100);
}

export default playKey;

