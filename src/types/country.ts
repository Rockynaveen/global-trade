// src/types/country.ts

export type Country = {
  name: {
    common: string;
  };

  flags: {
    png: string;
  };

  cca2: string;

  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
};