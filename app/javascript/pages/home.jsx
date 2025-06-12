import CommunityImpact from "./components/sections/communityimpact";
import FeaturedProjects from "./components/sections/featuredprojects";
import Hero from "./components/sections/hero";
import HowItWorks from "./components/sections/howitworks";
import "./styles/reset.css";

function Home(){
  return (
    <>
      <Hero/>
      <FeaturedProjects/>
      <HowItWorks/>
      <CommunityImpact/>
    </>
  )
}

export default Home;