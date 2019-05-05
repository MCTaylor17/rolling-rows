import { fromEvent, merge } from "rxjs";
import { tap, map, pairwise, share } from "rxjs/operators";

import { onLoad$, onScroll$, onResize$ } from "./nativeEvents";

// Window Properties
const winScrollTop$ = onScroll$.pipe(
  map(() => document.documentElement.scrollTop),
  share()
);

const winHeight$ = merge(
  onResize$,
  onLoad$,
).pipe(
  // subtrack scrollbar?
  // onResize$ is hot which makes onLoad$ hot
  // I think this is what's causing event's to miss.
  // use replace subject to for load?
  map(()=> window.innerHeight)
);

const winWidth$ = onResize$.pipe(
  // subtrack scrollbar?
  map(()=> window.innerWidth),
  share()
);

const winScrollDelta$ = winScrollTop$.pipe(
  pairwise(),
  map(([posA, posB]) => {
    return posB - posA; 
  })
);

const winScrolledDown$ = winScrollDelta$.pipe(map(delta => delta >= 0));
const winScrolledUp$ = winScrolledDown$.pipe(map(down => !down));

export { 
  winScrollTop$,
  winHeight$,
  winScrollDelta$,
  winScrolledDown$,
  winScrolledUp$,
}

export default {
  winScrollTop$,
  winHeight$,
  winScrollDelta$,
  winScrolledDown$,
  winScrolledUp$,
}