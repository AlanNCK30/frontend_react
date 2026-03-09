const SocialLink = ({ href, icon }) => {
  return (
    <>
      <li>
        <a href={href} target="_blank" className="nav-icon" rel="noreferrer">
          <i className={icon}></i>
        </a>
      </li>
    </>
  );
};

export default SocialLink;
