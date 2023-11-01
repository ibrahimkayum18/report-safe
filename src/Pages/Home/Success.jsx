

const Success = () => {
    return (
        <div className="my-14 px-5 lg:px-14">
            <h2 className="text-5xl font-bold text-center text-[#FF3611]">Success Stories</h2>
            <div className="lg:grid grid-cols-3 pt-8 gap-6">
                <div className="col-span-1">
                    <img src="https://i.ibb.co/d0v4MC0/police-2122394-1280.jpg" alt="" />
                </div>
                <div className="col-span-2">
                    <h2 className="text-3xl font-bold">We Appriciate You: <span className="text-[#FF3611]"> Annonymus</span></h2>
                    <p className="pt-7 text-xl">
                    Your courage, vigilance, and quick thinking played a pivotal role in the successful resolution of this case. Your willingness to step forward and provide valuable information not only helped us apprehend a criminal but also significantly contributed to enhancing the safety and security of our community.
                    </p>
                    <p className="pt-7 text-xl">
                        Due to Your help we are able to catch the <span>murderer</span> who secretle staying in your area. He is a ver dangerous man to live as neighborhoods. Thank You for your support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Success;