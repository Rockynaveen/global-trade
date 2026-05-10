import { useForm } from "react-hook-form";

type CargoFormData = {
  weight: number;
  category: string;
  hazmat: boolean;
  license?: string;
};

type Props = {
  setCargoData: any;
};

const CargoForm = ({ setCargoData }: Props) => {
  const { register, handleSubmit, watch } =
    useForm<CargoFormData>({
      defaultValues: {
        hazmat: false,
      },
    });

  const hazmat = watch("hazmat");

  const onSubmit = (data: CargoFormData) => {
    console.log(data);
    setCargoData(data);
  };

  return (
    <div className="dashboard-card">
      <p className="step-text">STEP 2 OF 4</p>

      <h2 className="step-title">Cargo Details</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="label">Cargo Weight</label>
          <input
            type="number"
            className="input-field"
            placeholder="1200"
            {...register("weight")}
          />
        </div>

        <div className="form-group">
          <label className="label">Cargo Category</label>
          <select className="input-field" {...register("category")}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="Textiles">Textiles</option>
          </select>
        </div>

        <div className="hazmat-box">
          <label>Hazardous Material</label>
          <input type="checkbox" {...register("hazmat")} />
        </div>

        {hazmat && (
          <div className="form-group">
            <label className="label">License Number</label>
            <input
              type="text"
              className="input-field"
              placeholder="HZM-45872"
              {...register("license")}
            />
          </div>
        )}

        <button type="submit" className="primary-btn">
          Save Cargo
        </button>
      </form>
    </div>
  );
};

export default CargoForm;