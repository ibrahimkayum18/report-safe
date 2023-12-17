import { useContext } from "react";
import useReports from "../../../../Hooks/useReports";
import useReviews from "../../../../Hooks/useReviews";
import { AuthContext } from "../../../../Providers/AuthProviders";
import usePosts from "../../../../Hooks/usePosts";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    const [reports, ] = useReports();
    const [reviews, ] = useReviews();
    const [posts, ] = usePosts();

    const yourReports = reports.filter(report => report.email === user.email)
    const yourReviews = reviews.filter(review => review.email === user.email)
    const yourPosts = posts.filter(post => post.email === user.email)

    return (
        <div>
            <h2 className="text-4xl ml-6 pl-5 border-l-8 border-orange-500 mt-5">User Profile</h2>
            <div className="divider"></div> 
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-5 w-full px-5">
                <div className="lg:col-span-3 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-white p-14 w-full rounded-lg">
                        <h2 className="text-5xl font-bold">{yourReports.length}+</h2>
                        <h3 className=" text-3xl">Your Reports</h3>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 text-center rounded-lg text-white p-14">
                        <h2 className="text-5xl font-bold">{yourReviews.length}+</h2>
                        <h3 className=" text-3xl">Your Reviews</h3>
                    </div>
                </div>
                <div className="col-span-2 text-center mt-6 lg:mt-0">
                    <img src={user.photoURL} className="h-36 w-36 mx-auto rounded-full" alt="" />
                    <h2 className="pt-5 text-3xl font-bold">{user.displayName}</h2>
                    <h2 className=" text-2xl ">{user.email}</h2>
                </div>
            </div>
            <div className="w-full text-center py-10 space-y-2">
                <h2 className="text-5xl font-semibold">Bingo!!!</h2>
                <h2 className="text-2xl font-medium">You have contributed a lot in the society.</h2>
                <h2 className="text-3xl font-semibold">Your total cases solved: <span className="text-sky-700 font-bold">{yourPosts.length}</span></h2>
            </div>
        </div>
    );
};

export default UserProfile;