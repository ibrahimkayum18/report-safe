import { FaTrash } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import useReports from "../../Hooks/useReports";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const YourReports = () => {
  const [myReports, setMyReports] = useState([])
  const {user} = useContext(AuthContext)
  const [reports, refetch] = useReports();
  const axiosSecure = useAxiosSecure();
  console.log(reports);
  useEffect(() => {
    const filter = reports.filter(report => report.email === user.email)
    setMyReports(filter);
  },[reports, user.email])

  const deleteReport = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reports/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  }
  return (
    <div>
      <h2 className="text-4xl ml-6 pl-5 border-l-8 border-orange-500 mt-5">
        Your Total Reports: {reports.length}
      </h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Crime Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Damage</th>
              <th>Confirmed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myReports.map((report, index) => (
              <tr key={report._id}>
                <th>{index + 1}</th>
                <th>{report.crimeType}</th>
                <td>{report.date}</td>
                <td>{report.time}</td>
                <td>{report.location}</td>
                <td>{report.damage}</td>
                <td className="">
                {report.confirmed === "pending" ? (
                    <button
                      className="btn bg-orange-500 text-white btn-sm"
                    >
                      Pending
                    </button>
                  ) : (
                    <button
                      className="btn bg-green-500 text-white btn-sm"
                    >
                      {report.confirmed}
                    </button>
                  )}
                </td>
                <td className="">
                  <button
                    onClick={() => deleteReport(report._id)}
                    className="text-2xl "
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YourReports;
