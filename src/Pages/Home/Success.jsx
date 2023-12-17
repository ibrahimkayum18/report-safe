import toast from "react-hot-toast";
import usePosts from "../../Hooks/usePosts";
import { BiLike } from "react-icons/bi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProviders";

const Success = () => {
  const [posts, refetch] = usePosts();
  const axiosPublic = useAxiosPublic();
  const [reviewMessage, setReviewMessage] = useState('');
  const {user} = useContext(AuthContext);

  const handleReview = e => {
    e.preventDefault();
    const review = e.target.review.value;
    const email = user.email;
    const name = user.displayName;
    const photo = user.photoURL;
    const reviewInfo = {
      review, email, name, photo
    }
    axiosPublic.post('/reviews', reviewInfo)
    .then(res => {
      if(res.data.insertedId){
        setReviewMessage('Review Send Successfully')
      }
    })

  }

  return (
    <div className="my-14 px-5 lg:px-24">
      <h2 className="text-5xl font-bold text-center text-[#FF3611]">
        Success Stories
      </h2>
      <div className="lg:grid grid-cols-3 pt-8 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-200 p-7 rounded-lg space-y-2 overflow-hidden"
            data-aos="fade-left"
          >
            <h2>Case name: {post.crimeType}</h2>
            <h2>Occurence Location: {post.location}</h2>
            <h2>Occurence Time: {post.time}</h2>
            <h2>Occurence Date: {post.date}</h2>
            <h2 className="text-green-600">Case Solved</h2>
            <h2>Thanks to: {post.name ? post.name : "annonymus"}</h2>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              data-aos="fade-up"
              className="btn btn-sm bg-orange-400 text-white"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Give Review
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div>
                  <form onSubmit={handleReview}>
                    <h2 className="text-xl">Give your valuable review on {post.crimeType}</h2>
                    <div data-aos="fade-up">
                      <label className="label">
                        <span>Review</span>
                      </label>
                      <textarea
                        name="review"
                        className="w-full input input-bordered h-20"
                        placeholder="Review about crime..."
                      ></textarea>
                    </div>
                    {reviewMessage.length > 1 && <p className="text-green-500 py-4">{reviewMessage}</p>}
                    <div className="my-5 text-center">
                        <button type="submit" className="btn btn-primary w-full">Post</button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
