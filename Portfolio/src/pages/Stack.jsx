import "../styles/Stack.css";

import htmlIcon from "../assets/text.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/physics.png";
import pythonIcon from "../assets/python.png";
import djangoIcon from "../assets/django.png";
import nodeIcon from "../assets/node.png";
import postgresIcon from "../assets/postgre.png";
import gitIcon from "../assets/git.png";
import dockerIcon from "../assets/social.png";
import jasmineIcon from "../assets/tea.png";
import jestIcon from "../assets/jest.png";
import pytestIcon from "../assets/test.png"

function Stack() {
    const technologies = [
        {
            name: "HTML",
            icon: htmlIcon,
            description: "Building semantic and accessible web pages.",
            category: "Frontend"
        },
        {
            name: "CSS",
            icon: cssIcon,
            description: "Creating responsive and modern interfaces.",
            category: "Frontend"
        },
        {
            name: "JavaScript",
            icon: jsIcon,
            description: "Building interactive web applications.",
            category: "Frontend"
        },
        {
            name: "React",
            icon: reactIcon,
            description: "Building component-based user interfaces.",
            category: "Frontend"
        },
        {
            name: "Python",
            icon: pythonIcon,
            description: "Backend development and automation.",
            category: "Backend"
        },
        {
            name: "Django",
            icon: djangoIcon,
            description: "Building powerful backend applications and APIs.",
            category: "Backend"
        },
        {
            name: "Node.js",
            icon: nodeIcon,
            description: "Building server-side JavaScript applications.",
            category: "Backend"
        },
        {
            name: "PostgreSQL",
            icon: postgresIcon,
            description: "Managing relational application data.",
            category: "Database"
        },
        {
            name: "Git",
            icon: gitIcon,
            description: "Version control and collaborative development.",
            category: "Tools"
        },
        {
            name: "Docker",
            icon: dockerIcon,
            description: "Containerizing applications for consistent development and deployment.",
            category: "Tools"
        },
        {
            name: "Jest",
            icon: jestIcon,
            description: "Testing JavaScript applications with unit and integration tests.",
            category: "Testing"
        },
        {
            name: "Jasmine",
            icon: jasmineIcon,
            description: "Writing behavior-driven tests for JavaScript applications.",
            category: "Testing"
        },
        {
            name: "pytest",
            icon: pytestIcon,
            description: "Testing Python applications with simple and powerful test suites.",
            category: "Testing"
        },
    ];

    return (
        <main className="stack">
            <section className="stack-header">
                <p>MY TECHNOLOGIES</p>

                <h1>
                    My <span>Stack</span>
                </h1>

                <p className="stack-intro">
                    Technologies and tools I use to build modern
                    web applications.
                </p>
            </section>

            <section className="stack-grid">
                {technologies.map((tech) => (
                    <div className="stack-card" key={tech.name}>

                        <div className="stack-icon">
                            <img
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                            />
                        </div>

                        <div className="stack-info">
                            <span className="stack-category">
                                {tech.category}
                            </span>

                            <h2>{tech.name}</h2>

                            <p>{tech.description}</p>
                        </div>

                    </div>
                ))}
            </section>
        </main>
    );
}

export default Stack;