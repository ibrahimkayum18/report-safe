import { FaArrowRight } from "react-icons/fa";


const SafetyCart = ({ safe }) => {
  const { category, imageURL, tips } = safe || {};
  return (
    <div className=" " data-aos="flip-left">
      <div className="h-[250px]">
        <img
        data-aos="zoom-in"
        className="w-full h-full"
          src={imageURL}
          alt="Movie"
        />
      </div>
      <div className="p-5" >
        <h2 className="card-title" data-aos="fade-right">{category}</h2>
        <div>
            {
                tips.map((tip, index) => <p key={index} className="flex gap-1" data-aos="fade-left"><FaArrowRight className="pt-2"/>{tip}</p>)
            }
        </div>
      </div>
    </div>
  );
};

export default SafetyCart;
