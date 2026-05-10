import axios from "axios";

export const fetchForex =
  async (
    from: string,
    to: string
  ) => {
    const response =
      await axios.get(
        `https://open.er-api.com/v6/latest/${from}`
      );

    return response.data.rates[to];
  };