import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import pythonIcon from "../assets/python.png"
import javascript from "../assets/js.png"
import djangoIcon from "../assets/django.png"
import reactIcon from "../assets/physics.png"
import dockerIcon from "../assets/social.png"
import "../styles/Home.css"

function Home() {
    return (
        <main className="home">
            <section className="hero">

                <div className="hero-text">
                    <p className="intro">
                        Hey, I am <span>Phetso</span>
                    </p>

                    <h1>Software Developer</h1>

                    <p className="description">
                        I build modern, responsive web applications
                        and digital experiences.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/projects">View My Work</Link>
                        <Link to="/about">About Me</Link>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="glow"></div>

                    <img
                        src={heroImage}
                        alt="Phetso"
                    />

                    <div className="tech tech-react">
                        <img src={reactIcon} alt="react icon" className="icon" />
                    </div>

                    <div className="tech tech-js">
                        <img src={javascript} alt="javascript icon" className="icon"/>
                    </div>

                    <div className="tech tech-python">
                        <img src={pythonIcon} alt="python icon" className="icon"/>
                    </div>

                    <div className="tech tech-django">
                        <img src={djangoIcon} alt="django icon" className="icon"/>
                    </div>

                    <div className="tech tech-docker">
                        <img src={dockerIcon} alt="docker icon" className="icon"/>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Home;