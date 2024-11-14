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

const contents = gsap.utils.toArray("#horizontal .content");

gsap.to(contents, {
  xPercent: -100 * (contents.length - 1), //deplacement de l'élément
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true, //épingle l'élément a sa position actuelle
    scrub: 1, //la valeur définir un delais à l'animation
  },
});
