import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success('Log Out Successfully')
    })
  }
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? "active underline font-bold text-red-600"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/report"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? "active underline font-bold text-red-600"
            : ""
        }
      >
        Report
      </NavLink>
      <NavLink
        to="/incident-map"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? "active underline font-bold text-red-600"
            : ""
        }
      >
        Incident-Map
      </NavLink>
      <NavLink
        to="/safety"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? "active underline font-bold text-red-600"
            : ""
        }
      >
        Safety Tips
      </NavLink>
      <NavLink
        to="/Your-reports"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? "active underline font-bold text-red-600"
            : ""
        }
      >
        Your Reports
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? "active underline font-bold text-red-600"
            : ""
        }
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img
              className="h-16 w-16 rounded-full"
              src="https://i.ibb.co/VYrYfPY/images-1.jpg"
              alt=""
            />
            <h2 className="text-3xl font-bold">ReportSafe</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">{navLinks}</ul>
      </div>
      {!user ? (
        <div className="navbar-end">
          <Link to={"/login"}>
            <button className="btn btn-primary">Log In</button>
          </Link>
        </div>
      ) : (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" ml-3">
            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user.displayName}</a>
            </li>
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
