import { fromEvent } from "rxjs";
import { mergeMap, throttleTime, map, takeUntil, tap } from "rxjs/operators";

//https://www.makeuseof.com/tag/5-amazing-sound-fx-can-make-audacity/

const headphones = document.getElementById("coffee");//TEMP
headphones.style.top = getComputedStyle(headphones).top; // sets once to avoid NaN

const mousemove$ = fromEvent(document, "mousemove");

//// WIP: Drag headphones around
//// They kinda go under the splash text at which point they become unclickable
//// I think there's a window method to get all elements at an X/Y
//// Yup, it's documents.elementsFromPoint(x,y).
//// It's experimental but has virtually full coverage according to MDN
//const headphonesDown$ = fromEvent(headphones, "mousedown");
//const mouseup$ = fromEvent(document, "mouseup");
//const headphonesDrag$ = headphonesDown$.pipe(
//  mergeMap(()=>mousemove$.pipe(takeUntil(mouseup$)))
//);
//
//headphonesDrag$.subscribe(event => {
//  const curTop = parseFloat(headphones.style.top.slice(0,-1));
//  const percentTop = event.pageY/window.innerHeight * 100;
//  const delta = curTop + (percentTop - curTop) + "%";
//  console.log({curTop, percentTop, delta})
//  headphones.style.top = delta;
//});

// Use Headphones to mute music?
// Can't import music here as music imports this module.
// This works from the index.  Otherwise need to split proximity detector
//import music from "./music";
//const headphones = document.getElementById("coffee");//TEMP
//headphones.addEventListener("click", () => music.toggleMute());

  
// NOTE: both required as pointer-events are turned off to allow clickthrough to background-buttons;
const splash = document.querySelectorAll("#splash, .background-splash");
const offset = el => {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft, height: rect.height }
}

const maxDistance = Math.sqrt(Math.pow(1,2) + Math.pow(1,2));

const distanceFromHeadphones = event => {
  const headphoneOffset = offset(headphones);
  const distX = event.pageX - headphoneOffset.left;
  const distY = event.pageY - headphoneOffset.top - headphoneOffset.height; // only subtract height to move closer to actual headphones as currently targeting coffee
  // TODO: move to on resize:
  const dist = Math.sqrt(Math.pow(distX,2) + Math.pow(distY,2));
  const max = Math.sqrt(Math.pow(window.innerWidth,2) + Math.pow(window.innerHeight,2));

  return 1 - dist/max;
}

const splashEnter$ = fromEvent(splash, "mouseenter");
const splashLeave$ = fromEvent(splash, "mouseleave");

const headphoneProximity$ = splashEnter$.pipe(
  mergeMap(() => mousemove$),
  throttleTime(100),
  map(distanceFromHeadphones)
);


export default headphoneProximity$;