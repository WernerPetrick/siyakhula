import "../../styles/projectcard.css"
import "../../styles/buttons.css";

function ProjectCard({ image, title, description, funded, goal, backers, daysLeft, category }) {
  const progressPercentage = (funded / goal) * 100;
  
  return (
    <div className="project-card">
      {/* Image with category badge */}
      <div className="project-card__image-container">
        <img src={image} alt={title} className="project-card__image" />
        <span className="project-card__category">{category}</span>
      </div>
      
      {/* Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        
        {/* Funding info */}
        <div className="project-card__funding">
          <div className="project-card__amounts">
            <span className="project-card__funded">R {funded}</span>
            <span className="project-card__goal">of R {goal}</span>
          </div>
          
          {/* Progress bar */}
          <div className="project-card__progress-bar">
            <div 
              className="project-card__progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          {/* Stats */}
          <div className="project-card__stats">
            <span className="project-card__backers">👥 {backers} backers</span>
            <span className="project-card__days">📅 {daysLeft} days left</span>
          </div>
        </div>
        
        {/* Back button */}
        <button className="btn-gradient">
          <span>♥</span> Back this Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;