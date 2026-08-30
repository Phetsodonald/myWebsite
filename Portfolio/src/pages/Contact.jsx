import "../styles/Contact.css";

function Contact() {
    return (
        <main className="contact">
            <section className="contact-section">

                <div className="contact-header">
                    <p className="section-label">GET IN TOUCH</p>

                    <h1>
                        Let's build something
                        <span> great.</span>
                    </h1>

                    <p>
                        Have a project, opportunity, or just want to
                        connect? Send me a message and I'll get back to you.
                    </p>
                </div>

                <div className="contact-container">

                    <div className="contact-info">

                        <h2>Contact Me</h2>

                        <p>
                            I'm always open to discussing new projects,
                            development opportunities, and interesting ideas.
                        </p>

                        <div className="contact-links">

                            <a href="mailto:donaldphetso69@gmail.com">
                                <span>✉</span>
                                <div>
                                    <small>Email</small>
                                    <strong>donaldphetso69@gmail.com</strong>
                                </div>
                            </a>

                            <a
                                href="https://github.com/Phetsodonald"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>↗</span>
                                <div>
                                    <small>GitHub</small>
                                    <strong>github.com/Phetsodonald</strong>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/phetso-donald-nkosi-96565a2a4/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>in</span>
                                <div>
                                    <small>LinkedIn</small>
                                    <strong>https://www.linkedin.com/in/phetso-donald-nkosi-96565a2a4/</strong>
                                </div>
                            </a>

                        </div>

                    </div>

                    <form className="contact-form">

                        <div className="form-row">

                            <div className="form-group">
                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What's this about?"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit">
                            Send Message
                            <span>→</span>
                        </button>

                    </form>

                </div>

            </section>
        </main>
    );
}

export default Contact;