// types.ts

export type CostSummaryProps = {
  weight: number;

  category: string;

  hazmat: boolean;

  temperature: number;

  exchangeRate: number;

  toCurrency: string;
};