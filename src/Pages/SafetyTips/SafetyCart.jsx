const SafetyCart = ({ safe }) => {
  console.log(safe);
  const { category, imageURL, tips } = safe || {};
  return (
    <div className="flex bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-[400px] h-[300px]"
          src={imageURL}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <div>
            {
                tips.map((tip, index) => <p key={index}>{tip}</p>)
            }
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default SafetyCart;
