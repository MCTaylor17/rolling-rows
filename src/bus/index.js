import * as $window from "./window";
import * as $keyboard from "./keyboard";
import * as $mouse from "./keyboard";
export { keydown$ } from "./keyboard";
export { mousedown$ } from "./mouse";

export default {
  window: $window,
  keyboard: $keyboard,
  keyboard: $mouse,
}