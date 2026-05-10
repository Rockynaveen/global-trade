import { useEffect } from "react";

import WeatherCard from "./weather-card";
import ForexCard from "./forex-card";

import { useWeather } from "../../../hooks/use-weather";
import { useForex } from "../../../hooks/use-forex";

type Props = {
  origin: any;
  destination: any;
  setTemperature: any;
  setExchangeRate: any;
};

const IntelligenceCard = ({
  origin,
  destination,
  setTemperature,
  setExchangeRate,
}: Props) => {
  const lat = destination?.latlng?.[0] || 0;
  const lon = destination?.latlng?.[1] || 0;

  const fromCurrency = origin?.currencies
    ? Object.keys(origin.currencies)[0]
    : "";

  const toCurrency = destination?.currencies
    ? Object.keys(destination.currencies)[0]
    : "";

  const weatherQuery = useWeather(lat, lon, !!lat && !!lon);
  const forexQuery = useForex(fromCurrency, toCurrency, !!fromCurrency && !!toCurrency);

  useEffect(() => {
    if (weatherQuery.data?.current?.temperature_2m) {
      setTemperature(weatherQuery.data.current.temperature_2m);
    }
  }, [weatherQuery.data]);

  useEffect(() => {
    if (forexQuery.data) {
      setExchangeRate(forexQuery.data);
    }
  }, [forexQuery.data]);

  return (
    <div className="dashboard-card">
      <p className="step-text">STEP 3 OF 4</p>

      <h2 className="step-title">Live Intelligence</h2>

      <WeatherCard
        loading={weatherQuery.isLoading}
        success={weatherQuery.isSuccess}
        temperature={weatherQuery.data?.current?.temperature_2m}
      />

      <ForexCard
        loading={forexQuery.isLoading}
        success={forexQuery.isSuccess}
        rate={forexQuery.data}
      />

      <button className="primary-btn">
        Intelligence Ready
      </button>
    </div>
  );
};

export default IntelligenceCard;