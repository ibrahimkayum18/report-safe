import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "./../../assets/a.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const LogIn = () => {
    const {login, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    login(email, password)
    .then(() => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log In successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state ? location.state : '/')
    })
  };
  const handleGoogleLogIn = () => {
    googleLogin()
    .then(() => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log In successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state ? location.state : '/')
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password..."
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center">
            <p className="pb-3">Or Log In with</p>
            <div className="pb-10 ">
              <button onClick={handleGoogleLogIn} className="flex hover:bg-sky-200 justify-center items-center gap-2 p-2 w-3/4 mx-auto border-2 border-primary rounded-full">
                <img
                  className="w-6 h-6"
                  src="https://i.ibb.co/Lpmm2m5/Google-G-logo-svg-1.webp"
                  alt=""
                />
                <p className="text-xl">Google</p>
              </button>
              <div className="pt-3">
                <p>
                  New to report safe? please{" "}
                  <Link to={"/register"} className="underline font-bold text-primary">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
