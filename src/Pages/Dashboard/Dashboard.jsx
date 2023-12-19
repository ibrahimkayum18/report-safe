import { Link, NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import {
  MdContactPhone,
  MdRateReview,
  MdReport,
  MdTipsAndUpdates,
} from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import useAdmin from "../../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const {logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success('Log Out Successfull')
    })
  }



  const navLinks = (
    <>
      {isAdmin ? (
        <>
        <div className="flex items-center gap-2 mb-5">
            <img
              className="h-16 w-16 rounded-full"
              src="https://i.ibb.co/VYrYfPY/images-1.jpg"
              alt=""
            />
            <h2 className="text-3xl font-bold">ReportSafe</h2>
          </div>
            <li>
            <NavLink to={"/dashboard/admin-profile"}>
              <span className="">
                <FaHome />
              </span>{" "}
              Admin Home
            </NavLink>
          </li>
            <li>
            <NavLink to={"/dashboard/manage-users"}>
              <span className="">
                <FaUsers />
              </span>{" "}
              Manage Users
            </NavLink>
          </li>
            <li>
            <NavLink to={"/dashboard/manage-reports"}>
              <span className="">
                <MdReport />
              </span>{" "}
              Manage Reports
            </NavLink>
          </li>
            <li>
            <NavLink to={"/dashboard/reviews"}>
              <span className="">
                <MdRateReview />
              </span>{" "}
              Manage Reviews
            </NavLink>
          </li>
            <li>
            <NavLink to={"/dashboard/solved-case"}>
              <span className="">
                <GiConfirmed  />
              </span>{" "}
              Solved Case
            </NavLink>
          </li>
        </>
      ) : (
        <>
        <div className="flex items-center gap-2 mb-5">
            <img
              className="h-16 w-16 rounded-full"
              src="https://i.ibb.co/VYrYfPY/images-1.jpg"
              alt=""
            />
            <h2 className="text-3xl font-bold">ReportSafe</h2>
          </div>
          <li>
            <NavLink to={"/dashboard/user-profile"}>
              <span className="">
                <FaHome />
              </span>{" "}
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/add-report"}>
              <span className="">
                <MdReport />
              </span>{" "}
              Add Report
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/your-report"}>
              <span className="">
                <TbReportSearch />
              </span>{" "}
              Your Reports
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <span className="">
                <MdRateReview />
              </span>{" "}
              Your Reviews
            </NavLink>
          </li>
        </>
      )}
      <div className="divider"></div>
      <div>
        <li>
          <Link to={"/"}>
            <span className="">
              <FaHome />
            </span>{" "}
            Home
          </Link>
        </li>
        <li>
          <Link to={"/safety"}>
            <span className="">
              <MdTipsAndUpdates />
            </span>{" "}
            Safety Tips
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            <span className="">
              <MdContactPhone />
            </span>{" "}
            Contact Us
          </Link>
        </li>
        <li onClick={handleLogOut}>
          <Link to={"/"}>
            <span className="">
              <FaUser />
            </span>{" "}
            Log Out
          </Link>
        </li>
        
      </div>
    </>
  );
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="drawer lg:drawer-open w-80">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <GiHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full text-lg bg-gray-200 text-black">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="w-full flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
