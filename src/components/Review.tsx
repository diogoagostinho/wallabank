function Review(props: {
  rImg: string;
  rName: string;
  rJob: string;
  rDescription: string;
}) {
  return (
    <>
      <div className="review-window">
        <div className="review-profile">
          <img src={"/profiles/" + props.rImg + ".png"} />
          <div className="person-info">
            <p className="person-name">{props.rName}</p>
            <p className="person-job">{props.rJob}</p>
          </div>
        </div>
        <div className="review-content">
          <p>{props.rDescription}</p>
        </div>
      </div>
    </>
  );
}

export default Review;
