import { fromEvent } from "rxjs";

const keydown$ = fromEvent(window,"keydown");

export { keydown$ };

export default { keydown$ };