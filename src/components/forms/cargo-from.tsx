// CargoForm.tsx

import { useFormContext } from "react-hook-form";

type CargoFormData = {
  weight: number;
  category: string;
  hazmat: boolean;
  license?: string;
};

const CargoForm = () => {
  const {
    register,
    watch,
  } =
    useFormContext<CargoFormData>();

  const hazmat =
    watch("hazmat");

  return (
    <div className="dashboard-card">
      <p className="step-text">
        STEP 2 OF 4
      </p>

      <h2 className="step-title">
        Cargo Details
      </h2>

      {/* =========================
          2 COLUMN GRID
      ========================= */}
      <div className="form-grid">

        {/* WEIGHT */}
        <div className="form-group">
          <label className="label">
            Cargo Weight (kg)
          </label>

          <input
            type="number"
            className="input-field"
            placeholder="1200"
            {...register("weight")}
          />
        </div>

        {/* CATEGORY */}
        <div className="form-group">
          <label className="label">
            Cargo Category
          </label>

          <select
            className="input-field"
            {...register(
              "category"
            )}
          >
            <option value="">
              Select Category
            </option>

            <option value="Electronics">
              Electronics
            </option>

            <option value="Automobile">
              Automobile
            </option>

            <option value="Pharmaceuticals">
              Pharmaceuticals
            </option>

            <option value="Textiles">
              Textiles
            </option>
          </select>
        </div>

      </div>

      {/* =========================
          HAZMAT SECTION
      ========================= */}
      <div className="hazmat-box">
        <div>
          <h4>
            Hazardous Material
          </h4>

          <p>
            Enable if cargo contains
            dangerous goods.
          </p>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            {...register(
              "hazmat"
            )}
          />

          <span className="slider"></span>
        </label>
      </div>

      {/* =========================
          LICENSE FIELD
      ========================= */}
      {hazmat && (
        <div className="form-group license-field">
          <label className="label">
            Hazard License Number
          </label>

          <input
            type="text"
            className="input-field"
            placeholder="HZM-45872"
            {...register(
              "license"
            )}
          />
        </div>
      )}
    </div>
  );
};

export default CargoForm;