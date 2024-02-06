import { FaTrash } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useReports from "../../../../Hooks/useReports";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

const SolvedCase = () => {
    const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const [reports, refetch] = useReports();

  const solvedCases = reports.filter((report) => report.confirmed === "solved");

  const deleteReport = (id) => {
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
  };


  return (
    <div className="-z-40">
      <h2 className="text-4xl ml-6 pl-5 border-l-8 border-orange-500 mt-5">
        Solved Case
      </h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table -z-50">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Crime Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Damage</th>
              <th>Post</th>
              <th>Solved</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {solvedCases.map((report, index) => (
              <tr key={report._id}>
                <th>{index + 1}</th>
                <th>{report.crimeType}</th>
                <td>{report.date}</td>
                <td>{report.time}</td>
                <td>{report.location}</td>
                <td>{report.damage}</td>
                <td className="text-green-600 font-semibold">
                  {report.confirmed}
                </td>
                <td>
                  <button
                  onClick={() => handlePost(report)}
                   className="btn btn-sm bg-green-500 text-white">
                    Post
                  </button>
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

export default SolvedCase;
