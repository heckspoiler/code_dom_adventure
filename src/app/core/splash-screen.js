class SplashScreen {
  #splashElement = document.createElement("div");
  render() {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
    .splash-screen {
      background: url('../assets/splash-screen.jpg');
      width: 650px;
      height: 650px;
    }
    `;

    document.head.appendChild(styleElement);

    const rootElement = document.getElementById("root");
    rootElement.appendChild(this.#splashElement);
    /* when it's private (#), it's not accessible from the outside. 
    But within the class we can use it and that's what we're going to do later in the destroy function. 
    So we can still use it inside the class, but not outside. This helps keeping the code less buggy. */
    splashElement.classList.add("splash-screen");
  }

  destroy() {}
}
