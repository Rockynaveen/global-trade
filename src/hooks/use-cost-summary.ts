import { useMemo } from "react";

import { calculateCost } from "../services/cost-service";

import type { CostSummaryProps } from "../types/cost";

export const useCostSummary = (
  props: CostSummaryProps
) => {
  return useMemo(
    () => calculateCost(props),
    [props]
  );
};