import "../../styles/howitworks.css";
import "../../styles/buttons.css";
import Heart from "../../../assets/heart-shape.png";
import MagnifyingGlass from "../../../assets/magnifying-glass.png";
import Trophy from "../../../assets/trophy.png"


function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Discover",
      icon: MagnifyingGlass,
      description: "Browse inspiring projects across South Africa and find causes that matter to you",
      color: "#28a745"
    },
    {
      number: 2,
      title: "Support",
      icon: Heart,
      description: "Donate to projects you love or start your own project easily with our simple tools",
      color: "#ffc107"
    },
    {
      number: 3,
      title: "Celebrate Impact",
      icon: Trophy,
      description: "See the difference your support makes and celebrate success stories with the community",
      color: "#dc3545"
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works__header">
        <h2>How it Works</h2>
        <p>Join thousands of South Africans making dreams come true in just three simple steps</p>
      </div>
      
      <div className="how-it-works__steps">
        {steps.map((step, index) => (
          <div key={step.number} className="step-card">
            <div className="step-card__number">{step.number}</div>
            
            <div className="step-card__icon" style={{ backgroundColor: step.color }}>
              <img src={step.icon} alt="" />
            </div>
            
            <h3 className="step-card__title">{step.title}</h3>
            <p className="step-card__description">{step.description}</p>
            
            {/* Connecting line - not shown for last step */}
            {index < steps.length - 1 && (
              <div className="step-card__connector"></div>
            )}
          </div>
        ))}
      </div>

      <div className="how-it-works__cta">
        <p>Ready to make a difference?</p>
        <div className="how-it-works__cta-buttons">
          <button className="btn-gradient">Start Exploring Projects</button>
          <button className="btn-green">Create Your Project</button>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;