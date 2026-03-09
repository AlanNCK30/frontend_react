const Link = ({ href, text, callback = () => {} }) => {
  return (
    <>
      <li>
        <a href={href} onClick={callback}>
          {text}
        </a>
      </li>
    </>
  );
};

export default Link;
