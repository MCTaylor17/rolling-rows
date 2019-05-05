import { fromEvent, merge } from "rxjs";
import { tap, map, pairwise, share } from "rxjs/operators";

// Window Events
const onLoad$ = fromEvent(window, "load");


const onScroll$ = merge(
  fromEvent(window, "scroll"),
  onLoad$,
).pipe(
  share()
);

const onResize$ = merge(
  fromEvent(window,"resize"),
  onLoad$,
).pipe(
  share()
);

const onOrientationChange$ = merge(
  fromEvent(window,"orientationchange"),
  onLoad$,
).pipe(
  share()
)

export { 
  onLoad$,
  onScroll$,
  onResize$,
}

export default {
  onLoad$,
  onScroll$,
  onResize$,
}