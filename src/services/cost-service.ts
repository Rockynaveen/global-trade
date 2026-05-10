import type {
  CostResult,
  CostSummaryProps,
} from "../types/cost";

export const calculateCost = ({
  weight,
  category,
  hazmat,
  temperature,
  exchangeRate,
}: CostSummaryProps): CostResult => {
  /* =========================================
     BASE RATE
  ========================================= */

  let baseRate = 0.5;

  switch (category) {
    case "Electronics":
      baseRate = 0.7;
      break;

    case "Automobile":
      baseRate = 1.2;
      break;

    case "Pharmaceuticals":
      baseRate = 0.9;
      break;

    default:
      baseRate = 0.5;
  }

  /* =========================================
     BASE COST
  ========================================= */

  const baseCost =
    weight * baseRate;

  /* =========================================
     WEATHER
  ========================================= */

  const weatherRisk =
    temperature &&
    temperature < 10
      ? baseCost * 0.15
      : 0;

  /* =========================================
     HAZMAT
  ========================================= */

  const hazmatFee = hazmat
    ? 100
    : 0;

  /* =========================================
     TOTAL
  ========================================= */

  const totalUSD =
    baseCost +
    weatherRisk +
    hazmatFee;

  /* =========================================
     CONVERTED
  ========================================= */

  const convertedTotal =
    exchangeRate
      ? totalUSD * exchangeRate
      : 0;

  return {
    baseCost,

    weatherRisk,

    hazmatFee,

    totalUSD,

    convertedTotal,
  };
};