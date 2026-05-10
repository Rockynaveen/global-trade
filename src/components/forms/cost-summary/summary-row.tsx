type Props = {
  label: string;

  value: string;
};

const SummaryRow = ({
  label,
  value,
}: Props) => {
  return (
    <div className="summary-row">
      <span>{label}</span>

      <strong>{value}</strong>
    </div>
  );
};

export default SummaryRow;