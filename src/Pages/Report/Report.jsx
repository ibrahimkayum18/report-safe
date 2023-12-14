import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Report = () => {
  const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const name = user.displayName;
        const u_photo = user.photoURL;
        const crimeType = form.crimeType.value;
        const date = form.date.value;
        const time = form.time.value;
        const location = form.location.value;
        const witness = form.witness.value;
        const damage = form.damage.value;
        const anonimus = form.anonimus.value;
        const contact = form.contact.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const report = {crimeType,email,name, u_photo, date, time, location, witness, damage, anonimus, description, contact, photo, confirmed:'pending'}
        console.log(report)

        const res = axiosPublic.post(image_hosting_api,photo, {
          headers:{
            'content-type' : 'multipart/form-data'
          }
        })
        console.log(res.data);
        axiosPublic.post('/reports', report)
        .then(res => {
          if(res.data.insertedId){
            toast.success('Report Addeded successfully')
            
          }
        })
    }


  return (
    <div className="bg-sky-200 py-5" data-aos="fade-up">
      <h2 className="ml-10 font-bold text-4xl mt-5 border-l-8 pl-5 border-orange-500">Report Crime</h2>
      <form onSubmit={handleSubmit} className="card-body  mx-auto p-5 bg-base-200 rounded-lg my-10">
        <div className="flex gap-5">
          <div className="form-control w-1/2" data-aos="fade-right">
            <label className="label">
              <span className="label-text">Crime Types</span>
            </label>
            <select
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
            <select
              name="witness"
              className="input input-bordered"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              </select>
          </div>
          <div className="form-control w-1/2" data-aos="fade-left">
            <label className="label">
              <span className="label-text "> Damages</span>
            </label>
            <select
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
          <div className="form-control w-1/2" data-aos="fade-right">
            <label className="label">
              <span className="label-text ">Report Crime Anonimus?</span>
            </label>
            <select
              name="anonimus"
              className="input input-bordered"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              </select>
          </div>
          <div className="form-control w-1/2" data-aos="fade-left">
            <label className="label">
              <span className="label-text ">Contact Info <sub className="text-red-500">Optional</sub></span>
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
          <button type="submit" className="btn btn-primary">Add Crime</button>
        </div>
      </form>
    </div>
  );
};

export default Report;
