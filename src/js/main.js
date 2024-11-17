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

gsap
  // Anime l'objet  lorsque son centre arrive en bas du viewport
  // Il devient visible et est déplacé horizontalement de 25%
  .to("#object-left-1", {
    opacity: 1,
    x: "10%",
    scrollTrigger: {
      trigger: "#object-left-1",
      start: "top bottom",
      scrub: 1,
    },
  });

// Anime l'objet  lorsque son centre arrive en bas du viewport
// Il devient visible et est déplacé horizontalement de -25%
gsap.to("#object-right-1", {
  opacity: 1,
  x: " -10%",
  scrollTrigger: {
    trigger: "#object-right-1",
    start: "top bottom",
    scrub: 3,
  },
});

gsap
  // Anime l'objet  lorsque son centre arrive en bas du viewport
  // Il devient visible et est déplacé horizontalement de 25%
  .to("#object-left-2-big", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#object-left-2-big",
      start: "top bottom",
      scrub: 1,
    },
  });

// Anime l'objet  lorsque son centre arrive en bas du viewport
// Il devient visible et est déplacé horizontalement de -25%
gsap.to("#object-left-2-small", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#object-left-2-small",
    start: "top bottom",
    scrub: 3,
  },
});
