import { useQuery } from "@tanstack/react-query";

import { fetchCountries } from "../services/county-service";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],

    queryFn: fetchCountries,
  });
};