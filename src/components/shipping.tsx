import { useForm, FormProvider } from "react-hook-form";

import RouteForm from "../components/forms/route-form";
import CargoForm from "../components/forms/cargo-from";
import IntelligenceCard from "../components/forms/intellegence/intellgence-card";
import CostSummary from "../components/forms/cost-summary/cost-summary";

export default function Shipping() {
    const methods = useForm({
        defaultValues: {
            step: 1,

            origin: null,
            destination: null,

            weight: "",
            category: "",
            hazmat: false,

            temperature: 0,
            exchangeRate: 0,
        },
    });

    const { watch, setValue } = methods;

    const step = watch("step");

    const origin = watch("origin");

    const destination = watch("destination");

    return (
        <FormProvider {...methods}>
            <div className="shipping-page">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="shipping-form-wrapper">

                                {/* ================= STEP 1 ================= */}

                                {step === 1 && (
                                    <div className="dashboard-card">

                                        <RouteForm
                                            setOrigin={(d: any) =>
                                                setValue("origin", d)
                                            }
                                            setDestination={(d: any) =>
                                                setValue("destination", d)
                                            }
                                        />

                                        {origin && destination && (
                                            <div className="text-center mt-4">
                                                <button
                                                    className="primary-btn"
                                                    onClick={() =>
                                                        setValue("step", 2)
                                                    }
                                                >
                                                    Continue
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* ================= STEP 2 ================= */}

                                {step === 2 && (
                                    <div className="dashboard-card">

                                        {/* BACK BUTTON INSIDE FORM */}

                                        <button
                                            type="button"
                                            className="back-btn"
                                            onClick={() =>
                                                setValue("step", 1)
                                            }
                                        >
                                            ← Back
                                        </button>

                                        <CargoForm
                                            setCargoData={(data: any) => {
                                                setValue(
                                                    "weight",
                                                    data.weight
                                                );

                                                setValue(
                                                    "category",
                                                    data.category
                                                );

                                                setValue(
                                                    "hazmat",
                                                    data.hazmat
                                                );
                                            }}
                                        />

                                        {watch("weight") &&
                                            watch("category") && (
                                                <div className="text-center mt-4">
                                                    <button
                                                        className="primary-btn"
                                                        onClick={() =>
                                                            setValue("step", 3)
                                                        }
                                                    >
                                                        Continue
                                                    </button>
                                                </div>
                                            )}
                                    </div>
                                )}

                                {/* ================= STEP 3 ================= */}

                                {step === 3 &&
                                    origin &&
                                    destination && (
                                        <div className="dashboard-card">

                                            {/* BACK BUTTON INSIDE FORM */}

                                            <button
                                                type="button"
                                                className="back-btn"
                                                onClick={() =>
                                                    setValue("step", 2)
                                                }
                                            >
                                                ← Back
                                            </button>

                                            <IntelligenceCard
                                                origin={origin}
                                                destination={destination}
                                                setTemperature={(
                                                    t: number
                                                ) =>
                                                    setValue(
                                                        "temperature",
                                                        t
                                                    )
                                                }
                                                setExchangeRate={(
                                                    r: number
                                                ) =>
                                                    setValue(
                                                        "exchangeRate",
                                                        r
                                                    )
                                                }
                                            />

                                            <div className="text-center mt-4">
                                                <button
                                                    className="primary-btn"
                                                    onClick={() =>
                                                        setValue("step", 4)
                                                    }
                                                >
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                {/* ================= STEP 4 ================= */}

                                {step === 4 && (
                                    <div className="dashboard-card">

                                        {/* BACK BUTTON INSIDE FORM */}

                                        <button
                                            type="button"
                                            className="back-btn"
                                            onClick={() =>
                                                setValue("step", 3)
                                            }
                                        >
                                            ← Back
                                        </button>

                                        <CostSummary
                                            weight={watch("weight")}
                                            category={watch("category")}
                                            hazmat={watch("hazmat")}
                                            temperature={watch("temperature")}
                                            exchangeRate={watch("exchangeRate")}
                                            fromCurrency={
                                                origin?.currencies
                                                    ? Object.keys(
                                                        origin.currencies
                                                    )[0]
                                                    : ""
                                            }
                                            toCurrency={
                                                destination?.currencies
                                                    ? Object.keys(
                                                        destination.currencies
                                                    )[0]
                                                    : ""
                                            }
                                        />
                                    </div>
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </FormProvider>
    );
}