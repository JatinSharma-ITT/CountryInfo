import countryFacts from "../api/countryData.json";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const getExcerpt = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are the Interesting Facts <br /> We're proud of
        </h2>

        <div className="gradient-cards">
          {countryFacts.map((country) => {
            const {
              id,
              countryName,
              capital,
              population,
              interestingFact,
              image,
            } = country;
            return (
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <figure>
                    <img src={image} alt="" />
                  </figure>
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">Capital:</span> {capital}
                  </p>
                  <p>
                    <span className="card-description">Population:</span>{" "}
                    {population}
                  </p>
                  <p>
                    <span className="card-description">Interesting Fact: </span>
                    {getExcerpt(interestingFact, 30)}
                  </p>
                  {/* <button
                    className="read-more-btn"
                    onClick={() => navigate(`/country/${id}`)}
                  >
                    Read More
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
