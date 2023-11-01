const Report = () => {
  return (
    <div className="bg-sky-200 pb-10">
      <h2 className="text-center font-bold text-4xl pt-5">Repor Crime</h2>
      <form className="card-body lg:w-3/4 mx-auto p-5 bg-base-200 rounded-lg my-10">
        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Crime Types</span>
            </label>
            <select
              id="crimeType "
              name="crimeType"
              className="input input-bordered"
            >
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
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input
              type="time"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text ">Location</span>
            </label>
            <input
              type="location"
              placeholder="Location..."
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text ">Are You Witness?</span>
            </label>
            <select
              id="witness "
              name="witness"
              className="input input-bordered"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text "> Damages</span>
            </label>
            <select
              id="damage "
              name="damage"
              className="input input-bordered"
            >
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
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text ">Report Crime Anonimus?</span>
            </label>
            <select
              id="anonimus "
              name="anonimus"
              className="input input-bordered"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text ">Contact Info <sub className="text-red-500">Optional</sub></span>
            </label>
            <input
              type="text"
              placeholder="Contact Info..."
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div>
            <label className="label">
                <span>Description</span>
            </label>
            <textarea name="description" className="w-full input input-bordered h-20" placeholder="Description about crime..."></textarea>
        </div>
        <div>
            <label className="label">
                <span>Upload Image</span>
            </label>
            <input type="file" className="file" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Crime</button>
        </div>
      </form>
    </div>
  );
};

export default Report;