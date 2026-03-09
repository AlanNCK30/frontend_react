import Service from "../components/Service";
import Title from "../components/Title";
import { services } from "../../data.js";

function Services() {
  return (
    <>
      <section className="section__services" id="services">
        <Title title="our" subtitle="services" />
        <div className="section__services--center">
          {services.map((item) => {
            return <Service key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
