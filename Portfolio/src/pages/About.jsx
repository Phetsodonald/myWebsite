import "../styles/About.css";

function About() {
    return (
        <main className="about">
            <section className="about-section">

                <div className="about-image">
                    <div className="about-glow"></div>

                    <img
                        src="/src/assets/hero.png"
                        alt="Phetso"
                    />
                </div>

                <div className="about-content">
                    <p className="section-label">ABOUT ME</p>

                    <h1>
                        Turning ideas into
                        <span> digital experiences.</span>
                    </h1>

                    <p>
                        I'm Phetso, a web developer passionate about
                        building modern, responsive and user-friendly
                        applications.
                    </p>

                    <p>
                        I enjoy taking an idea from concept to a working
                        product, solving problems with code and constantly
                        learning new technologies along the way.
                    </p>

                    <div className="about-stats">
                        <div>
                            <strong>10+</strong>
                            <span>Projects</span>
                        </div>

                        <div>
                            <strong>5+</strong>
                            <span>Technologies</span>
                        </div>

                        <div>
                            <strong>∞</strong>
                            <span>Things to learn</span>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default About;