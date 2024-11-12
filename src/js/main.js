import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#furieuse",
    start: "top top", //définis le début de l'animation
    end: "bottom top", //définis la fin de l'animation
    scrub: true, // la valeur ''true'' sychonise l'animation a la position du scoll
  },
});

gsap.utils.toArray(".parallax").forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);
  tl.to(layer, { y: movement, ease: "none" }, 0);
});
