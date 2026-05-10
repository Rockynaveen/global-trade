import { useQuery } from "@tanstack/react-query";

import { fetchWeather } from "../services/weather-service";

export const useWeather = (
  lat: number,
  lon: number,
  enabled: boolean
) => {
  return useQuery({
    queryKey: [
      "weather",
      lat,
      lon,
    ],

    queryFn: () =>
      fetchWeather(lat, lon),

    enabled,
  });
};