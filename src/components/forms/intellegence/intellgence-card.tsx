// IntelligenceCard.tsx

import { useEffect } from "react";

import { useFormContext } from "react-hook-form";

import WeatherCard from "./weather-card";
import ForexCard from "./forex-card";

import { useWeather } from "../../../hooks/use-weather";
import { useForex } from "../../../hooks/use-forex";

const IntelligenceCard = () => {
  const {
    watch,
    setValue,
  } = useFormContext();

  /* =========================================
     GET COUNTRY DATA
  ========================================= */

  const origin =
    watch("originData");

  const destination =
    watch("destinationData");

  /* =========================================
     LAT & LNG
  ========================================= */

  const lat =
    destination?.latlng?.[0] ||
    0;

  const lon =
    destination?.latlng?.[1] ||
    0;

  /* =========================================
     CURRENCIES
  ========================================= */

  const fromCurrency =
    origin?.currencies
      ? Object.keys(
          origin.currencies
        )[0]
      : "";

  const toCurrency =
    destination?.currencies
      ? Object.keys(
          destination.currencies
        )[0]
      : "";

  /* =========================================
     API CALLS
  ========================================= */

  const weatherQuery =
    useWeather(
      lat,
      lon,
      !!lat && !!lon
    );

  const forexQuery =
    useForex(
      fromCurrency,
      toCurrency,
      !!fromCurrency &&
        !!toCurrency
    );

  /* =========================================
     STORE WEATHER
  ========================================= */

  useEffect(() => {
    if (
      weatherQuery.data
        ?.current
        ?.temperature_2m
    ) {
      setValue(
        "temperature",
        weatherQuery.data.current
          .temperature_2m
      );
    }
  }, [weatherQuery.data]);

  /* =========================================
     STORE FOREX
  ========================================= */

  useEffect(() => {
    if (forexQuery.data) {
      setValue(
        "exchangeRate",
        forexQuery.data
      );

      setValue(
        "toCurrency",
        toCurrency
      );
    }
  }, [forexQuery.data]);

  return (
    <div className="dashboard-card intelligence-card">

      {/* HEADER */}
      <div className="intelligence-header">
        <p className="step-text">
          STEP 3 OF 4
        </p>

        <h2 className="step-title">
          Live Intelligence
        </h2>

        <p className="intelligence-subtitle">
          Real-time weather and forex
          analytics for your selected
          shipping route.
        </p>
      </div>

      {/* TOP STATS */}
      <div className="intelligence-top">

        <div className="mini-stat-card">
          <span>
            FROM
          </span>

          <h4>
            {origin?.name
              ?.common || "-"}
          </h4>
        </div>

        <div className="mini-arrow">
          →
        </div>

        <div className="mini-stat-card">
          <span>
            TO
          </span>

          <h4>
            {destination?.name
              ?.common || "-"}
          </h4>
        </div>

      </div>

      {/* 2 COLUMN GRID */}
      <div className="intelligence-grid">

        {/* WEATHER */}
        <div className="intel-box">
          <WeatherCard
            loading={
              weatherQuery.isLoading
            }
            success={
              weatherQuery.isSuccess
            }
            temperature={
              weatherQuery.data
                ?.current
                ?.temperature_2m
            }
          />
        </div>

        {/* FOREX */}
        <div className="intel-box">
          <ForexCard
            loading={
              forexQuery.isLoading
            }
            success={
              forexQuery.isSuccess
            }
            rate={
              forexQuery.data
            }
          />
        </div>

      </div>

    </div>
  );
};

export default IntelligenceCard;