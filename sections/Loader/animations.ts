import { gsap } from "gsap";
gsap.defaults({
  duration: 4,
  ease: "expo.inOut",
});

export const introAnimation = (centerImageWrapperRef: HTMLElement | null) => {
  if (!centerImageWrapperRef) return;
  gsap.fromTo(
    centerImageWrapperRef,
    {
      opacity: 0,
      y: 300,
    },
    {
      opacity: 1,
      y: 0,
      duration: 7,
      delay: 0.2,
      ease: "expo.out",
    }
  );
};

export const scaleCenterImage = (centerImageWrapperRef: HTMLElement | null) => {
  const tl = gsap.timeline();
  if (centerImageWrapperRef) {
    tl.to(centerImageWrapperRef, {
      width: "100%",
      height: "100vh",
      borderRadius: "0px",
    });
  }
  return tl;
};
