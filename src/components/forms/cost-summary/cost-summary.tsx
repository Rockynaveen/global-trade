// CostSummary.tsx

import { useFormContext } from "react-hook-form";

const CostSummary = () => {
  const { watch } =
    useFormContext();

  /* =========================================
     GET FORM VALUES
  ========================================= */

  const weight =
    Number(watch("weight")) || 0;

  const category =
    watch("category") || "";

  const hazmat =
    watch("hazmat") || false;

  const temperature =
    Number(
      watch("temperature")
    ) || 0;

  const exchangeRate =
    Number(
      watch("exchangeRate")
    ) || 1;

  const toCurrency =
    watch("toCurrency") ||
    "USD";

  /* =========================================
     CATEGORY SHIPPING RATE
  ========================================= */

  let rate = 0.5;

  switch (category) {
    case "Electronics":
      rate = 0.7;
      break;

    case "Automobile":
      rate = 1.2;
      break;

    case "Pharmaceuticals":
      rate = 0.9;
      break;

    case "Textiles":
      rate = 0.4;
      break;

    default:
      rate = 0.5;
  }

  /* =========================================
     BASE SHIPPING COST (USD)
  ========================================= */

  const baseCost =
    weight * rate;

  /* =========================================
     WEATHER RISK (15%)
  ========================================= */

  const weatherRisk =
    temperature < 10
      ? baseCost * 0.15
      : 0;

  /* =========================================
     HAZMAT FEE
  ========================================= */

  const hazmatFee = hazmat
    ? 100
    : 0;

  /* =========================================
     TOTAL USD
  ========================================= */

  const totalUSD =
    baseCost +
    weatherRisk +
    hazmatFee;

  /* =========================================
     FINAL CONVERSION
  ========================================= */

  const convertedTotal =
    totalUSD * exchangeRate;

  /* =========================================
     CURRENCY SYMBOLS
  ========================================= */

  const currencySymbols: Record<
    string,
    string
  > = {
    USD: "$",
    INR: "₹",
    GBP: "£",
    EUR: "€",
    JPY: "¥",
    ANG: "ƒ",
  };

  const targetSymbol =
    currencySymbols[
      toCurrency
    ] || "";

  return (
    <div className="dashboard-card cost-summary-card">
      <p className="step-text">
        STEP 4 OF 4
      </p>

      <h2 className="step-title">
        Cost Summary
      </h2>

      <div className="summary-row">
        <span>
          Base Shipping
        </span>

        <strong>
          $
          {baseCost.toFixed(2)}
        </strong>
      </div>

      <div className="summary-row">
        <span>
          Weather Risk
        </span>

        <strong>
          +$
          {weatherRisk.toFixed(
            2
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>
          Hazmat Fee
        </span>

        <strong>
          +$
          {hazmatFee.toFixed(
            2
          )}
        </strong>
      </div>

      <div className="summary-divider"></div>

      <div className="summary-total">
        <span>Total USD</span>

        <h3>
          $
          {totalUSD.toFixed(2)}
        </h3>
      </div>

      <div className="converted-box">
        <p>
          Converted Currency
        </p>

        <h2>
          {targetSymbol}
          {convertedTotal.toFixed(
            2
          )}{" "}
          {toCurrency}
        </h2>

        <small>
          1 USD ={" "}
          {exchangeRate.toFixed(
            2
          )}{" "}
          {toCurrency}
        </small>
      </div>

      <div className="status-success">
        Shipment intelligence
        completed successfully.
      </div>

      <button className="primary-btn">
        Confirm Shipment
      </button>
    </div>
  );
};

export default CostSummary;