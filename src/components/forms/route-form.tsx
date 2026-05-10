import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useCountries } from "../../hooks/use-countires";

const routeSchema = z.object({
  origin: z.string(),

  destination: z.string(),
});

type RouteFormData = z.infer<
  typeof routeSchema
>;

type Props = {
  setOrigin: any;

  setDestination: any;
};

const RouteForm = ({
  setOrigin,
  setDestination,
}: Props) => {
  const {
    data: countries = [],
    isLoading,
  } = useCountries();

  const {
    register,
    watch,
  } = useForm<RouteFormData>({
    resolver:
      zodResolver(routeSchema),
  });

  /* =========================================
     WATCH VALUES
  ========================================= */

  const origin = watch("origin");

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
     UPDATE PARENT STATE
  ========================================= */

  useEffect(() => {
    if (selectedOrigin) {
      setOrigin(selectedOrigin);
    }
  }, [selectedOrigin]);

  useEffect(() => {
    if (
      selectedDestination
    ) {
      setDestination(
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
        <p>Loading Countries...</p>
      ) : (
        <>
          {/* ORIGIN */}
          <div className="form-group">
            <label className="label">
              Origin Country
            </label>

            <select
              className="input-field"
              {...register("origin")}
            >
              <option value="">
                Select Country
              </option>

              {countries.map(
                (country: any) => (
                  <option
                    key={country.cca2}
                    value={
                      country.name.common
                    }
                  >
                    {
                      country.name.common
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
                    key={country.cca2}
                    value={
                      country.name.common
                    }
                  >
                    {
                      country.name.common
                    }
                  </option>
                )
              )}
            </select>
          </div>

          {/* ROUTE PREVIEW */}
          <div className="route-preview">
            <div className="route-country">
              <h4>
                {selectedOrigin?.name
                  ?.common || "-"}
              </h4>
            </div>

            <div className="route-arrow">
              →
            </div>

            <div className="route-country">
              <h4>
                {selectedDestination
                  ?.name?.common ||
                  "-"}
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RouteForm;