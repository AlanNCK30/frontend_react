import thumbnail from "../assets/thumnail.jpg";
import Title from "./Title";

function About() {
  return (
    <>
      <section className="section__about" id="about">
        <Title title={"about"} subtitle={"us"} />
        <div className="section__about--center">
          <div className="section__about-img">
            <img src={thumbnail} alt="" />
          </div>
          <article className="section__about-info">
            <h3>explore the different</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.</p>
            <a href="#" className="section__about-btn btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
