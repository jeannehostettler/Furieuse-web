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

gsap.to("#object-left-1", {
  opacity: 1,
  x: "10%",
  scrollTrigger: {
    trigger: "#object-left-1",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.to("#object-right-1", {
  opacity: 1,
  x: " -10%",
  scrollTrigger: {
    trigger: "#object-right-1",
    start: "top bottom",
    scrub: 3,
  },
});

gsap.to("#object-left-2-big", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#object-left-2-big",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.to("#object-left-2-small", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#object-left-2-small",
    start: "top bottom",
    scrub: 10,
  },
});

gsap.to("#object-left-3", {
  opacity: 1,
  x: "10%",
  scrollTrigger: {
    trigger: "#object-left-3",
    start: "top bottom",
    scrub: 1,
  },
});

gsap.to("#object-right-3", {
  opacity: 1,
  x: " -10%",
  scrollTrigger: {
    trigger: "#object-right-3",
    start: "top bottom",
    scrub: 3,
  },
});

gsap.to("#object-4", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#object-4",
    start: "top bottom",
    scrub: 10,
  },
});

gsap.to("#object-5", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#object-5",
    start: "top bottom",
    scrub: 10,
  },
});

gsap.to("#object-left-8", {
  opacity: 1,
  x: "10%",
  scrollTrigger: {
    trigger: "#object-left-8",
    start: "top bottom",
    scrub: 5,
  },
});

gsap.to("#object-right-9", {
  opacity: 1,
  x: "-5%",
  scrollTrigger: {
    trigger: "#object-right-9",
    start: "top bottom",
    scrub: 5,
  },
});

gsap.to("#object-left-10", {
  opacity: 1,
  x: "5%",
  scrollTrigger: {
    trigger: "#object-left-10",
    start: "top bottom",
    scrub: 5,
  },
});

// const scrollCall = document.querySelector(".scroll-container"); //(class qui définit la position)
// const footer = document.querySelector(".footer");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         scrollCall.style.position = "absolute";
//       } else {
//         scrollCall.style.position = "fixed";
//       }
//     });
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );

// observer.observe(footer);
