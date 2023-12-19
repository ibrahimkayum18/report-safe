import { useContext } from "react";
import usePosts from "../../../../Hooks/usePosts";
import useReports from "../../../../Hooks/useReports";
import useReviews from "../../../../Hooks/useReviews";
import useSafetyTips from "../../../../Hooks/useSafetyTips";
import useUsers from "../../../../Hooks/useUsers";
import { AuthContext } from "../../../../Providers/AuthProviders";


const AdminProfile = () => {
    const [reports] = useReports();
    const [users] = useUsers();
    const [SafetyTips] = useSafetyTips()
    const [reviews] = useReviews();
    const [posts] = usePosts();
    const {user} = useContext(AuthContext)
    return (
        <div className="pt-5 px-5 space-y-5">
            <div className="h-30 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="bg-sky-400  rounded-xl text-center text-white py-8">
                    <h2 className="text-7xl font-bold">{users.length}+</h2>
                    <p className="text-2xl font-bold py-3">Total Users</p>
                </div>
                <div className="bg-blue-600 rounded-xl text-center text-white py-8">
                    <h2 className="text-7xl font-bold">{reports.length}+</h2>
                    <p className="text-2xl font-bold py-3">Total Reports</p>
                </div>
                <div className="bg-orange-600 rounded-xl text-center text-white py-8">
                    <h2 className="text-7xl font-bold">{SafetyTips.length}+</h2>
                    <p className="text-2xl font-bold py-3">Safety tips</p>
                </div>
            </div>
            <div className="h-30 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-orange-600 rounded-xl text-center text-white py-8">
                    <h2 className="text-7xl font-bold">{reviews.length}+</h2>
                    <p className="text-2xl font-bold py-3">Total Reviews</p>
                </div>
                <div className="bg-sky-400 rounded-xl text-center text-white py-8">
                    <h2 className="text-7xl font-bold">{posts.length}+</h2>
                    <p className="text-2xl font-bold py-3">Solved Cases</p>
                </div>
                <div className="bg-blue-600 rounded-xl text-center text-white py-8">
                    <img src={user.photoURL} className="w-28 h-28 rounded-full mx-auto" alt="" />
                    <p className="text-2xl font-bold py-3">{user.displayName}</p>
                </div>
                
            </div>
        </div>
    );
};

export default AdminProfile;