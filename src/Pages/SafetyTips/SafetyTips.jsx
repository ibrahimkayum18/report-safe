import { useLoaderData } from "react-router-dom";
import SafetyCart from "./SafetyCart";

const SafetyTips = () => {
    const safety = useLoaderData()
    return (
        <div className="lg:grid lg:grid-cols-4 gap-6 h-screen">
            <div className="lg:col-span-1 bg-blue-300">
            </div>
            <div className="lg:col-span-3 bg-gray-300">
                {
                    safety.map(safe => <SafetyCart 
                    key={safe._id}
                    safe={safe}
                    ></SafetyCart>)
                }
            </div>
        </div>
    );
};

export default SafetyTips;