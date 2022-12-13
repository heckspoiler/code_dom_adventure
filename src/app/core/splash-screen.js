const MAX_FRAMES = 2;
const HALF_SECOND = 500;

class SplashScreen {
  #splashElement = document.createElement("div");
  #animation = null;
  render() {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
    .splash-screen {
      background: url('../assets/splash-screen.jpg') no-repeat;
      width: 650px;
      height: 650px;
    }

    .splash-screen-1 {
      background-position-x: 0;
    }

    .splash-screen-2 {
      background-position-x: -650px;
    }
    `;

    document.head.appendChild(styleElement);

    this.#splashElement.classList.add("splash-screen", "splash-screen-1");

    const rootElement = document.getElementById("root");

    rootElement.appendChild(this.#splashElement);
    /* when it's private (#), it's not accessible from the outside. 
    But within the class we can use it and that's what we're going to do later in the destroy function. 
    So we can still use it inside the class, but not outside. This helps keeping the code less buggy. */

    this.#animate();
  }

  destroy() {
    this.#splashElement.remove();
    console.log("hurensohn", this.#animation);
    window.clearInterval(this.#animation);
  }

  #animate() {
    let frame = 1;

    const animate = () => {
      this.#splashElement.classList.remove(`splash-screen-${frame}`);
      console.log("still running");
      frame++;

      this.#splashElement.classList.add(`splash-screen-${frame}`);

      if (frame > MAX_FRAMES) {
        frame = 1;
      }
    };
    this.#animation = setInterval(animate, HALF_SECOND);
  }
}
