const Tour = ({ imagePath, date, title, description, icon, location, duration, price }) => {
  return (
    <>
      <div className="section__tours-card">
        <div className="section__tours-image">
          <img src={imagePath} alt="" />
          <p className="section__tours-date">{date}</p>
        </div>
        <div className="section__tours-info">
          <div className="section__tours-title">
            <h4>{title}</h4>
          </div>
          <p className="section__tours-description">{description}</p>
          <div className="section__tours-footer">
            <p className="section__tours-icon">
              <span>
                <i className={icon}></i>
              </span>
              {location}
            </p>
            <p>{duration}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
