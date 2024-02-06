import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { RiAdminFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const makeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(user);

        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          refetch();
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Sucess!",
              text: "Admin Created Successfully",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
        Manage Users
      </h2>
      <div className="divider"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table -z-50">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <th>
                    <img
                      className="w-8 h-8 rounded-xl"
                      src={user.photo}
                      alt=""
                    />
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="">
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => makeAdmin(user)}
                        className="text-2xl "
                      >
                        <RiAdminFill />
                      </button>
                    )}
                  </td>
                  <td className="">
                    <button
                      onClick={() => deleteUser(user._id)}
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
    </div>
  );
};

export default ManageUsers;
