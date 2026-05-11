// RouteForm.tsx

import { useEffect } from "react";

import { useFormContext } from "react-hook-form";

import { useCountries } from "../../hooks/use-countires";

const RouteForm = () => {
  const {
    data: countries = [],
    isLoading,
  } = useCountries();

  const {
    register,
    watch,
    setValue,
  } = useFormContext();

  /* =========================================
     WATCH VALUES
  ========================================= */

  const origin =
    watch("origin");

  const destination =
    watch("destination");

  /* =========================================
     FIND COUNTRIES
  ========================================= */

  const selectedOrigin =
    countries.find(
      (country: any) =>
        country.name.common ===
        origin
    );

  const selectedDestination =
    countries.find(
      (country: any) =>
        country.name.common ===
        destination
    );

  /* =========================================
     STORE FULL COUNTRY DATA
  ========================================= */

  useEffect(() => {
    if (selectedOrigin) {
      setValue(
        "originData",
        selectedOrigin
      );
    }
  }, [selectedOrigin]);

  useEffect(() => {
    if (
      selectedDestination
    ) {
      setValue(
        "destinationData",
        selectedDestination
      );
    }
  }, [selectedDestination]);

  return (
    <div className="dashboard-card">
      <p className="step-text">
        STEP 1 OF 4
      </p>

      <h2 className="step-title">
        Select Route
      </h2>

      {isLoading ? (
        <p>
          Loading Countries...
        </p>
      ) : (
        <>
          {/* 2 COLUMN GRID */}
          <div className="form-grid">

            {/* ORIGIN */}
            <div className="form-group">
              <label className="label">
                Origin Country
              </label>

              <select
                className="input-field"
                {...register(
                  "origin"
                )}
              >
                <option value="">
                  Select Country
                </option>

                {countries.map(
                  (country: any) => (
                    <option
                      key={
                        country.cca2
                      }
                      value={
                        country.name
                          .common
                      }
                    >
                      {
                        country.name
                          .common
                      }
                    </option>
                  )
                )}
              </select>
            </div>

            {/* DESTINATION */}
            <div className="form-group">
              <label className="label">
                Destination Country
              </label>

              <select
                className="input-field"
                {...register(
                  "destination"
                )}
              >
                <option value="">
                  Select Country
                </option>

                {countries.map(
                  (country: any) => (
                    <option
                      key={
                        country.cca2
                      }
                      value={
                        country.name
                          .common
                      }
                    >
                      {
                        country.name
                          .common
                      }
                    </option>
                  )
                )}
              </select>
            </div>

          </div>

          {/* ROUTE PREVIEW */}
          <div className="route-preview">
            <div className="route-country">
              <h4>
                {selectedOrigin
                  ?.name?.common ||
                  "-"}
              </h4>
            </div>

            <div className="route-arrow">
              →
            </div>

            <div className="route-country">
              <h4>
                {selectedDestination
                  ?.name
                  ?.common || "-"}
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RouteForm;