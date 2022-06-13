import { AJAX } from "./api.js";
import Country from "./view.js/countryView.js";

const getCountry = (country) => AJAX(country);

const init = () => {
  Country._country(getCountry);
};
init();
