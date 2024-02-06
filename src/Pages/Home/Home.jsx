import Banner from "../../Components/Banner";
import AboutHome from "./AboutHome";
import Success from "./Success";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            <AboutHome></AboutHome>
            <Success></Success>
        </div>
    );
};

export default Home;