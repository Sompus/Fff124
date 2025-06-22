
import barba from "https://cdn.skypack.dev/@barba/core";
import gsap from "https://cdn.skypack.dev/gsap";

barba.init({
  transitions: [{
    leave({ current }) {
      return gsap.to(current.container, {
        opacity: 0,
        duration: 0.5
      });
    },
    enter({ next }) {
      return gsap.from(next.container, {
        opacity: 0,
        duration: 0.5
      });
    }
  }]
});
