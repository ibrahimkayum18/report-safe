import useReports from "../../../../Hooks/useReports";

const AddSuccessStory = () => {

    const [reports] = useReports();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-4xl ml-6 pl-5 font-bold border-l-8 border-orange-500 my-5">
        Add Success Story
      </h2>
      <hr />
      <div>
        <form
          onSubmit={handleSubmit}
          className="card-body  mx-auto px-5 bg-base-200 rounded-lg "
        >
          <div className="flex gap-5">
            <div className="form-control w-1/2" data-aos="fade-right">
              <label className="label">
                <span className="label-text">Crime Types</span>
              </label>
              <select name="crimeType" className="input input-bordered">
                <option value="Theft">Theft</option>
                <option value="Assault">Assault</option>
                <option value="Vandalism">Vandalism</option>
                <option value="Burglary">Burglary</option>
                <option value="Robbery">Robbery</option>
                <option value="Fraud">Fraud</option>
                <option value="Drug Offense">Drug Offense</option>
                <option value="Homicide">Homicide</option>
                <option value="Kidnapping">Kidnapping</option>
                <option value="Domestic Violence">Domestic Violence</option>
                <option value="Cybercrime">Cybercrime</option>
                <option value="Shoplifting">Shoplifting</option>
                <option value="Car Theft">Car Theft</option>
                <option value="Identity Theft">Identity Theft</option>
                <option value="Arson">Arson</option>
                <option value="Sexual Assault">Sexual Assault</option>
                <option value="Child Abuse">Child Abuse</option>
                <option value="Human Trafficking">Human Trafficking</option>
                <option value="Public Intoxication">Public Intoxication</option>
                <option value="DUI (Driving Under the Influence)">
                  DUI (Driving Under the Influence)
                </option>
              </select>
            </div>
            <div className="form-control w-1/2" data-aos="fade-left">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2" data-aos="fade-right">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                type="time"
                name="time"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2" data-aos="fade-left">
              <label className="label">
                <span className="label-text ">Location</span>
              </label>
              <input
                type="location"
                name="location"
                placeholder="Location..."
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2" data-aos="fade-right">
              <label className="label">
                <span className="label-text ">Are You Witness?</span>
              </label>
              <select name="witness" className="input input-bordered">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="form-control w-1/2" data-aos="fade-left">
              <label className="label">
                <span className="label-text "> Damages</span>
              </label>
              <select name="damage" className="input input-bordered">
                <option value="no-damage">No Damage or Injuries</option>
                <option value="1">1 Person Injured</option>
                <option value="2">2 Person Injured</option>
                <option value="3">3 Person Injured</option>
                <option value="4">4 Person Injured</option>
                <option value="5 or more">5 or more Person Injured</option>
                <option value="10 or more">10 or more Person Injured</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2" data-aos="fade-right">
              <label className="label">
                <span className="label-text ">Report Crime Anonimus?</span>
              </label>
              <select name="anonimus" className="input input-bordered">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="form-control w-1/2" data-aos="fade-left">
              <label className="label">
                <span className="label-text ">
                  Contact Info <sub className="text-red-500">Optional</sub>
                </span>
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Contact Info..."
                className="input input-bordered"
              />
            </div>
          </div>
          <div data-aos="fade-up">
            <label className="label">
              <span>Description</span>
            </label>
            <textarea
              name="description"
              className="w-full input input-bordered h-20"
              placeholder="Description about crime..."
            ></textarea>
          </div>
          <div>
            <label className="label">
              <span>Upload Image</span>
            </label>
            <input type="file" name="photo" className="file" />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Crime
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSuccessStory;
