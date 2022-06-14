class Country {
  _navbar = document.querySelector(".navbar");
  _countryContainer = document.querySelector(".countryBox");
  _input = document.querySelector(".input__search");
  _overlay = document.querySelector(".overlay");
  _countryData;

  constructor() {
    this._hideOverlay();
    this._toggleMode();
  }

  _toggleOverlay() {
    return this._overlay.classList.toggle("hidden");
  }

  _toggleMode() {
    this._navbar.addEventListener("click", (e) => {
      const btnMode = e.target.closest(".screenMode__svg");
      if (!btnMode) return;

      [".light", ".dark"].forEach((c) =>
        document.querySelector(c).classList.toggle("hidden")
      );

      ["body", ".navbar__items-title"].forEach((c) => {
        if (c === "body")
          document.querySelector(c).classList.toggle("darkBackGround");
        if (c === ".navbar__items-title")
          document.querySelector(c).classList.toggle("whiteText");
      });
    });
  }

  _hideOverlay() {
    this._overlay.addEventListener("click", (e) => {
      const btnClose = e.target.closest(".errorBtn");
      if (!btnClose) return;

      this._toggleOverlay();
    });
  }

  _renderCountry(country) {
    const markup = `
        <article class="country">
          <img class="country__img" crossorigin="anonymous" src="${
            Object.values(country.flags)[0]
          }" />
          <div class="country__data">
            <h3 class="country__name">${country.name.common}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +country.population / 10000000
            ).toFixed(2)}    people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(country.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(country.currencies)[0].name
            }</p>
          </div>
       </article>
          `;

    this._countryContainer.insertAdjacentHTML("afterbegin", markup);
    this._countryContainer.style.opacity = 1;
  }

  _country(handler) {
    this._input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        handler(e.target.value);
        e.target.value = "";
      }
    });
  }
}

export default new Country();
