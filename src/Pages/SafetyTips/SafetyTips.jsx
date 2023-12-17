import { useLoaderData } from "react-router-dom";
import SafetyCart from "./SafetyCart";
import useSafetyTips from "../../Hooks/useSafetyTips";

const SafetyTips = () => {
    const [SafetyTips, refetch] = useSafetyTips()
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto">
            <div>
                <div className="py-10">
                    <h2 className="pl-6 border-l-8 border-sky-400 text-2xl lg:text-4xl font-bold">Safety Tips For Everyone</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    SafetyTips.map(safe => <SafetyCart 
                    key={safe._id}
                    safe={safe}
                    ></SafetyCart>)
                }
            </div>
        </div>
    );
};

export default SafetyTips;