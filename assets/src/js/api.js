import country from "./view.js/countryView.js";

const timeout = (sec) => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject(new Error(`Request took too long! Timeout after ${sec} second`)),
      sec * 1000
    );
  });
};

export const AJAX = async (url) => {
  try {
    const getCountry = fetch(`https://restcountries.com/v3.1/name/${url}`);
    const res = await Promise.race([getCountry, timeout(1)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.message} (${res.status})`);
    return country._renderCountry(data[0]);
  } catch (err) {
    country._toggleOverlay();
    throw err;
  }
};
