import {
    DollarSign,
    Loader2,
    CheckCircle2,
} from "lucide-react";

type Props = {
    loading: boolean;

    success: boolean;

    rate?: number;
};

const ForexCard = ({
    loading,
    success,
    rate,
}: Props) => {
    return (
        <div className="intel-card">
            <div className="intel-top">
                <div className="intel-left">
                    <div className="intel-icon">
                        <DollarSign size={20} />
                    </div>

                    <div>
                        <h4>
                            Forex Intelligence
                        </h4>

                        <p>
                            Exchange Rate API
                        </p>
                    </div>
                </div>

                {loading && (
                    <Loader2 className="spin-icon" />
                )}

                {success && (
                    <CheckCircle2 className="success-icon" />
                )}
            </div>

            <div className="currency-box">
                <h3>
                    1 USD = ₹{rate}
                </h3>
            </div>
        </div>
    );
};

export default ForexCard;