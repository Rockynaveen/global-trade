type Props = {
  weight: number;

  category: string;

  hazmat: boolean;

  temperature: number;

  exchangeRate: number;

  fromCurrency: string;

  toCurrency: string;
};

const CostSummary = ({
  weight,
  category,
  hazmat,
  temperature,
  exchangeRate,
  fromCurrency,
  toCurrency,
}: Props) => {
  /* =========================================
     CATEGORY RATE
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
     BASE COST
  ========================================= */

  const baseCost =
    weight * rate;

  /* =========================================
     WEATHER RISK
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
     CONVERTED TOTAL
  ========================================= */

  const convertedTotal =
    totalUSD * exchangeRate;

  return (
    <div className="dashboard-card cost-summary-card">
      <p className="step-text">
        STEP 4 OF 4
      </p>

      <h2 className="step-title">
        Cost Summary
      </h2>

      {/* BASE */}
      <div className="summary-row">
        <span>
          Base Shipping
        </span>

        <strong>
          ${baseCost.toFixed(2)}
        </strong>
      </div>

      {/* WEATHER */}
      <div className="summary-row">
        <span>
          Weather Risk
        </span>

        <strong>
          $
          {weatherRisk.toFixed(
            2
          )}
        </strong>
      </div>

      {/* HAZMAT */}
      <div className="summary-row">
        <span>
          Hazmat Fee
        </span>

        <strong>
          ${hazmatFee}
        </strong>
      </div>

      <div className="summary-divider"></div>

      {/* TOTAL */}
      <div className="summary-total">
        <span>Total USD</span>

        <h3>
          ${totalUSD.toFixed(2)}
        </h3>
      </div>

      {/* CONVERTED */}
      <div className="converted-box">
        <p>
          Converted Currency
        </p>

        <h2>
          {toCurrency}{" "}
          {convertedTotal.toFixed(
            2
          )}
        </h2>

        <small>
          1 {fromCurrency} ={" "}
          {exchangeRate.toFixed(2)}{" "}
          {toCurrency}
        </small>
      </div>

      {/* SUCCESS */}
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