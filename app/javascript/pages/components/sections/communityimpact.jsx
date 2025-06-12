import "../../styles/communityimpact.css";
import "../../styles/buttons.css";
import Nomsa from "../../../assets/nomsa.jpg";

function CommunityImpact() {
  const impactStats = [
    {
      value: "R10M+",
      label: "Total Raised",
      icon: "$",
      color: "#28a745"
    },
    {
      value: "1,200+",
      label: "Projects Funded",
      icon: "🏆",
      color: "#ffc107"
    },
    {
      value: "50,000+",
      label: "Active Donors",
      icon: "👥",
      color: "#dc3545"
    }
  ];

  const testimonial = {
    quote: "Through this platform, I was able to raise funds for our community garden project. Now we're feeding 200 families and teaching sustainable farming. The support from fellow South Africans has been incredible!",
    name: "Nomsa Mthembu",
    title: "Community Leader",
    location: "Soweto, Johannesburg",
    avatar: Nomsa
  };

  return (
    <section className="community-impact">
      <div className="community-impact__header">
        <h2>Community Impact</h2>
        <p>See how we're transforming lives and communities across South Africa</p>
      </div>

      <div className="community-impact__content">
        {/* Testimonial Card */}
        <div className="testimonial-card">
          <div className="testimonial-card__quote">
            <span className="quote-mark">"</span>
            <p>{testimonial.quote}</p>
          </div>
          
          <div className="testimonial-card__author">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="testimonial-card__avatar"
            />
            <div className="testimonial-card__info">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.title}</p>
              <p>{testimonial.location}</p>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="impact-stats">
          {impactStats.map((stat, index) => (
            <div key={index} className="impact-stat">
              <div className="impact-stat__icon" style={{ backgroundColor: stat.color }}>
                <span>{stat.icon}</span>
              </div>
              <div className="impact-stat__content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="community-impact__cta">
        <p>Join our community and be part of the change</p>
        <button className="btn-gradient" type="button">Share Your Story</button>
      </div>
    </section>
  );
}

export default CommunityImpact;