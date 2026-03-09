import Title from "../components/Title";
import Tour from "../components/Tour";
import { tourCards } from "../../data.js";

function Tours() {
  return (
    <>
      <section className="section__tours" id="tours">
        <Title title={"feature"} subtitle={"tours"} />
        <div className="section__tours--center">
          {tourCards.map((item) => {
            return <Tour key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Tours;
