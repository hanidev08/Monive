import gsap from "gsap";
import Core from "smooothy";

export class KeyboardLinkSlider extends Core {
  constructor(wrapper: HTMLElement, config?: any) {
    super(wrapper, config);

    gsap.ticker.add(this.update.bind(this));
    this.#addKeyboardEvents();
    this.#handleLinks();
  }

  #handleKeydown = (e: KeyboardEvent) => {
    if (!this.isVisible) return;

    if (/^[0-9]$/.test(e.key)) {
      const slideIndex = parseInt(e.key);
      if (this.config.infinite) {
        this.goToIndex(slideIndex);
      } else {
        if (slideIndex > this.items.length - 1) return;
        this.goToIndex(slideIndex);
      }
      return;
    }

    switch (e.key) {
      case "ArrowLeft":
        this.goToPrev();
        break;
      case "ArrowRight":
        this.goToNext();
        break;
      case " ":
        this.goToNext();
        break;
    }
  };

  #addKeyboardEvents() {
    window.addEventListener("keydown", this.#handleKeydown);
  }

  #handleLinks() {
    const links = this.wrapper.querySelectorAll("a");

    links.forEach((item) => {
      let startX = 0;
      let startY = 0;
      let startTime = 0;
      let isDragging = false;

      (item as HTMLElement).style.pointerEvents = "none";

      const handleMouseDown = (e: MouseEvent) => {
        startX = e.clientX;
        startY = e.clientY;
        startTime = Date.now();
        isDragging = false;
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!startTime) return;

        const deltaX = Math.abs(e.clientY - startX);
        const deltaY = Math.abs(e.clientY - startY);

        if (deltaX > 10 || deltaY > 10) {
          isDragging = true;
        }
      };

      const handleMouseUp = () => {
        const deltaTime = Date.now() - startTime;

        if (!isDragging && deltaTime < 300) {
          item.click();
        }

        startTime = 0;
        isDragging = false;
      };

      const parent = item.parentElement;
      if (parent) {
        parent.addEventListener("mousedown", handleMouseDown);
        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("mouseup", handleMouseUp);
      }
    });
  }

  onUpdate = () => {
    const velocityWithDirection = this.target - this.current;
    const velocityAbs = Math.abs(velocityWithDirection);

    const normalizedVelocity = Math.min(velocityAbs, 1);
    const globalScale = 1 - normalizedVelocity * 0.07;

    const globalSkew = velocityWithDirection * 9.5;

    this.items.forEach((item) => {
      const currentTransform = item.style.transform;
      item.style.transform = `${currentTransform} scale(${globalScale}) skewX(${globalSkew}deg)`;
    });
  };
}
