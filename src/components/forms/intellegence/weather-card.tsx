import {
    CloudRain,
    Loader2,
    CheckCircle2,
} from "lucide-react";

type Props = {
    loading: boolean;

    success: boolean;

    temperature?: number;
};

const WeatherCard = ({
    loading,
    success,
    temperature,
}: Props) => {
    return (
        <div className="intel-card">
            <div className="intel-top">
                <div className="intel-left">
                    <div className="intel-icon">
                        <CloudRain size={20} />
                    </div>

                    <div>
                        <h4>
                            Weather Intelligence
                        </h4>

                        <p>
                            Open-Meteo API
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

            <div className="intel-content">
                <div className="weather-temp">
                    {temperature}°
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;