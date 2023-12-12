const AboutHome = () => {
  return (
    <div className="my-14" data-aos="fade-up">
      <h2 className="text-center text-5xl font-bold py-5">About Us</h2>
      <div className="lg:flex items-center gap-6 w-3/4 mx-auto pt-8">
        <div className="lg:w-1/2" data-aos="fade-right">
          <img
            className="w-full shadow-xl"
            src="https://i.ibb.co/VmY1pQC/club-2492013-1280.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl mt-5 lg:mt-0 font-bold text-[#FF3611] pb-5">
            Our Mission:{" "}
          </h2>
          <p className="text-xl text-gray-500">
            Our mission is to create safer communities by providing a secure
            platform for reporting and addressing crimes, empowering individuals
            to take an active role in improving their neighborhoods
          </p>
        </div>
      </div>
      <div className="lg:flex items-center flex-row-reverse gap-6 w-3/4 mx-auto pt-8">
        <div className="lg:w-1/2" data-aos="fade-left">
          <img
            className="w-full shadow-xl"
            src="https://i.ibb.co/c3WBFzM/police-6828441-1280.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2" data-aos="fade-right">
          <h2 className="text-3xl mt-5 lg:mt-0 font-bold text-[#FF3611] pb-5">
            Our Vision:{" "}
          </h2>
          <p className="text-xl text-gray-500">
            Our vision is to create a world where every individual, regardless
            of their background or location, can live without fear and in
            thriving, secure communities. We aspire to be the leading online
            platform for crime reporting, fostering a global network of
            connected and empowered communities dedicated to crime prevention
            and safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
