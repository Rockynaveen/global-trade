import { useQuery } from "@tanstack/react-query";

import { fetchForex } from "../services/forex";

export const useForex = (
  from: string,
  to: string,
  enabled: boolean
) => {
  return useQuery({
    queryKey: [
      "forex",
      from,
      to,
    ],

    queryFn: () =>
      fetchForex(from, to),

    enabled,
  });
};