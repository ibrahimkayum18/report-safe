import { BiTrash } from "react-icons/bi";
import useReviews from "../../../../Hooks/useReviews";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageReviews = () => {
  const [reviews, refetch] = useReviews();
  const axiosSecure = useAxiosSecure();

  const deleteUser = (id) => {
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
        axiosSecure.delete(`/reviews/${id}`).then((res) => {
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
        Manage Reviews
      </h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        {reviews.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((report, index) => (
                <tr key={report._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={report.photo}
                      className="w-8 h-8 rounded-lg"
                      alt=""
                    />
                  </td>
                  <td>{report.name}</td>
                  <td>{report.email}</td>
                  <td>{report.review}</td>
                  <td className="">
                    <button
                      onClick={() => deleteUser(report._id)}
                      className="btn text-2xl text-red-600"
                    >
                      <BiTrash />
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h2 className="text-2xl text-center ">
              No review has been addeded by users
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageReviews;
