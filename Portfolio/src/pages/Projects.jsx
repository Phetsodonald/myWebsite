import "../styles/Projects.css";

import bountyFinder from "../assets/bounty-finder.png";
import accommodation from "../assets/node.png";
import library from "../assets/node.png";
import f1Dashboard from "../assets/node.png";

function Projects() {
    const projects = [
        {
            title: "Bounty Finder",
            description:
                "A platform that discovers GitHub issues and opportunities suitable for developers looking to contribute and earn.",
            image: bountyFinder,
            technologies: ["React", "Django", "Python"                                                                                                                                                      ],
            github: "https://github.com/Phetsodonald/Bounty-finder",
            demo: "https://bounty-finder.vercel.app/"
        },
        
    ];

    return (
        <main className="projects">

            <section className="projects-header">
                <p>MY WORK</p>

                <h1>
                    Featured <span>Projects</span>
                </h1>

                <p className="projects-intro">
                    A selection of projects I've built while learning,
                    experimenting and solving real-world problems.
                </p>
            </section>

            <section className="projects-grid">

                {projects.map((project) => (
                    <article
                        className="project-card"
                        key={project.title}
                    >

                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        </div>

                        <div className="project-content">

                            <h2>{project.title}</h2>

                            <p>
                                {project.description}
                            </p>

                            <div className="project-tech">
                                {project.technologies.map((tech) => (
                                    <span key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo ↗
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub ↗
                                </a>
                            </div>

                        </div>

                    </article>
                ))}

            </section>

        </main>
    );
}

export default Projects;