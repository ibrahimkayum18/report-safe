import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ContactUs = () => {
  const axiosPublic = useAxiosPublic();
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const address = form.address.value;
    const problem = form.problem.value;
    const photo = form.photo.value;
    console.log(name, email, date, address, problem, photo);
    const contacts = {
      name,
      email,
      date,
      address,
      problem,
      photo,
    };

    axiosPublic.post("/contact", contacts).then((res) => {
      if (res.data.insertedId) {
        toast.success("Your message has been send");
      }
    });
  };
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <div className="py-10">
        <h2
          className="pl-6 border-l-8 border-sky-400 text-4xl font-bold"
          data-aos="fade-up"
        >
          Contact Us If You Face Any Problems
        </h2>
      </div>
      <div>
        <form onSubmit={handleContact} className="mb-10">
          <div className="md:flex gap-5">
            <div className="form-control lg:w-1/2" data-aos="fade-right">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:w-1/2" data-aos="fade-left">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email..."
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control lg:w-1/2" data-aos="fade-right">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:w-1/2" data-aos="fade-left">
              <label className="label">
                <span className="label-text ">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address..."
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div data-aos="fade-up">
            <label className="label">
              <span>Describe Your Problem</span>
            </label>
            <textarea
              name="problem"
              className="w-full input input-bordered h-20"
              placeholder="Describe Your Problem..."
            ></textarea>
          </div>
          <div>
            <label className="label">
              <span>
                Upload Image <sup className="text-red-600">Optional</sup>{" "}
              </span>
            </label>
            <input type="file" name="photo" className="file" />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Problem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
