import { AJAX } from "./api.js";
import Country from "./view.js/countryView.js";

const loaderTimer = (sec) => setTimeout(Country._toggleOverlay(), sec * 1000);

const getCountry = (country) => {
  loaderTimer(0.1);

  setTimeout(() => {
    clearTimeout(Country._toggleOverlay());
  }, 1.2 * 1000);

  return AJAX(country);
};

const init = () => {
  Country._country(getCountry);
};
init();
