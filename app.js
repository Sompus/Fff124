
import gsap from "https://cdn.skypack.dev/gsap";
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero title fade-in
gsap.from(".hero-title", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power4.out"
});

// CTA button fade-in
gsap.from(".cta-btn", {
  duration: 1.5,
  opacity: 0,
  y: 100,
  delay: 0.5,
  ease: "power4.out"
});

// Features scroll in
gsap.utils.toArray(".feature-item").forEach(item => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out"
  });
});
