import "../../styles/featuredprojects.css";
import "../../styles/buttons.css";
import ProjectCard from "../cards/projectcard";

function FeaturedProjects() {
  return (
    <>
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <p>Discover amazing projects making a difference in South Africa</p>
        <div className="project-cards">
          <ProjectCard />
        </div>

        <button type="button" className="btn btn-green">View All Projects</button>
      </section>
    </>
  )
}

export default FeaturedProjects;