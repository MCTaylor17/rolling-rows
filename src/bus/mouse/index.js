import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

const mousedown$ = fromEvent(window,"mousedown");

const middleClick$ = mousedown$.pipe(
  filter(e => e.which === 2)
);

export { mousedown$, middleClick$ };

export default { mousedown$, middleClick$ };