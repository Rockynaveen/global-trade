type Props = {
  currentStep: number;
};

const Stepper = ({
  currentStep,
}: Props) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="stepper-wrapper">
      {steps.map((step, index) => (
        <div
          key={step}
          className="stepper-item"
        >
          {/* STEP CIRCLE */}
          <div
            className={`step-circle ${
              currentStep >= step
                ? "active-step"
                : ""
            }`}
          >
            {step}
          </div>

          {/* LINE */}
          {index !==
            steps.length - 1 && (
            <div
              className={`step-line ${
                currentStep >
                step
                  ? "active-line"
                  : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;