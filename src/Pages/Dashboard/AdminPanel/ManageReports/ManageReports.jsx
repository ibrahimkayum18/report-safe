import { RiAdminFill } from "react-icons/ri";
import useReports from "../../../../Hooks/useReports";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageReports = () => {
  const axiosSecure = useAxiosSecure();
  const [reports, refetch] = useReports();

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
    <div>
      <h2 className="text-4xl ml-6 pl-5 border-l-8 border-orange-500 mt-5">
        Manage Reports
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
              <th>Details</th>
              <th>Recieved</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={report._id}>
                <th>{index + 1}</th>
                <th>{report.crimeType}</th>
                <td>{report.date}</td>
                <td>{report.time}</td>
                <td>{report.location}</td>
                <td>{report.damage}</td>
                <td className="">
                  <button className="btn bg-orange-500 text-white btn-sm">
                    Details
                  </button>
                </td>
                <td>Confirmed</td>
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

export default ManageReports;
