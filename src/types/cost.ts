export type CostSummaryProps = {
  weight: number;

  category: string;

  hazmat: boolean;

  temperature?: number;

  exchangeRate?: number;

  fromCurrency?: string;

  toCurrency?: string;
};

export type CostResult = {
  baseCost: number;

  weatherRisk: number;

  hazmatFee: number;

  totalUSD: number;

  convertedTotal: number;
};