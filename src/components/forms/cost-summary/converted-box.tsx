type Props = {
  amount: number;

  fromCurrency?: string;

  toCurrency?: string;

  exchangeRate?: number;
};

const ConvertedBox = ({
  amount,
  fromCurrency,
  toCurrency,
  exchangeRate,
}: Props) => {
  return (
    <div className="converted-box">
      <p>
        Converted to {toCurrency}
      </p>

      <h2>
        {toCurrency}{" "}
        {amount.toFixed(2)}
      </h2>

      <small>
        1 {fromCurrency} ={" "}
        {exchangeRate?.toFixed(2)}{" "}
        {toCurrency}
      </small>
    </div>
  );
};

export default ConvertedBox;