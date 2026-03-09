const Service = ({ icon, title, text }) => {
  return (
    <>
      <article className="section__services-card">
        <span className="section__sercies-icon">
          <i className={icon}></i>
        </span>
        <div className="section__servcies-info">
          <h4>{title}</h4>
        </div>
        <div className="section__servcies-text">
          <p>{text}</p>
        </div>
      </article>
    </>
  );
};

export default Service;
