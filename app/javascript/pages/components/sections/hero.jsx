import "../../styles/hero.css"
import "../../styles/buttons.css"

function Hero(){
  return (
    <>
      <section className="hero">
        <h1><span>Empower Dreams</span> in South Africa</h1>
        <p>Join thousands of South Africans creating positive change. Fund projects that matter, start your own initiative, and build a brighter future together.</p>
        <div className="hero-buttons">
          <button type="button" className="btn btn-gradient">Donate Now</button>
          <button type="button" className="btn btn-green">Start a Project → </button>
        </div>
      </section>    
    </>
  )
}

export default Hero;