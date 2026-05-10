import axios from "axios";

export const fetchCountries =
  async () => {
    const response =
      await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,currencies,cca2,latlng"
      );

    return response.data.filter(
      (country: any) =>
        country?.name?.common &&
        country?.currencies &&
        country?.latlng
    );
  };