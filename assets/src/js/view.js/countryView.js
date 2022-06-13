class Country {
  _parentEl = document.querySelector(".countryBox");
  _input = document.querySelector(".input__search");
  _countryData;

  // constructor() {
  //   this._loader();
  // }

  _loader() {
    console.log("yes");
    document.querySelector(".overlay").classList.toggle("hidden");
  }

  _renderError() {
    const markUp = ``;
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

    console.log("working");
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._parentEl.style.opacity = 1;
  }

  _country(handler) {
    this._input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        handler(e.target.value);
        e.target.value = "";
        console.log("working");
        return this._loader();
      }
    });
  }
}

export default new Country();
