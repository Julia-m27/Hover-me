document.addEventListener("DOMContentLoaded", () => {
  const anchor = document.getElementById("anchor");

  const animateTo = (d, ease, duration = 1) => {
    gsap.killTweensOf("#top");
    gsap.to("#top", {
      attr: { d },
      ease,
      duration
    });
  };

  anchor.addEventListener("pointerenter", () => {
    animateTo("M 10,70 Q 100,20 190,70", "elastic.out(1.4, 0.4)", 0.8);
  });

  anchor.addEventListener("pointerleave", () => {
    animateTo("M 10,70 Q 100,70 190,70", "elastic.out(1.8, 0.2)", 1.5);
  });
});