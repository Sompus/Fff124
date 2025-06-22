
import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll";

export const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]') || document.body,
  smooth: true,
  multiplier: 1.2
});
