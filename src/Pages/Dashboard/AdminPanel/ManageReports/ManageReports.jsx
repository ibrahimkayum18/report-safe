import { RiAdminFill } from "react-icons/ri";
import useReports from "../../../../Hooks/useReports";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { ImCross } from "react-icons/im";

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

  const handleConfirm = (report) => {
    Swal.fire({
      title: `"Are you sure?"`,
      text: `You want to confirm crime ${report.crimeType}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/reports/confirmed/${report._id}`).then((res) => {
          refetch();
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Sucess!",
              text: "Crime Confirmed",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleSolved = (report) => {
    Swal.fire({
      title: `"Are you sure?"`,
      text: `You want to confirm crime ${report.crimeType}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/reports/solved/${report._id}`).then((res) => {
          refetch();
          if (res.data.modifiedCount > 0) {
            axiosSecure.post("/posts", report).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  title: "Sucess!",
                  text: "Crime Confirmed",
                  icon: "success",
                });
              }
            });
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
              <td>Solved</td>
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
                  <button>Details</button>
                </td>

                {report.confirmed === "pending" ? (
                  <td>
                    <button
                      onClick={() => handleConfirm(report)}
                      className="btn bg-orange-500 text-white btn-sm"
                    >
                      Pending
                    </button>
                  </td>
                ) : report.confirmed === "investigating" ? (
                  <td>
                    <button className="btn bg-green-500 text-white btn-sm">
                      {report.confirmed}
                    </button>
                  </td>
                ) : (
                  <td></td>
                )}
                {report.confirmed === "pending" ||
                report.confirmed === "investigating" ? (
                  <td>
                    <button onClick={() => handleSolved(report)}>
                      <ImCross />
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className="bg-green-500 text-white btn btn-sm">
                      {report.confirmed}
                    </button>
                  </td>
                )}

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
