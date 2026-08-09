import Section from "../components/layout/Section";
import "../styles/about.css";

function About() {
    return (
        <Section id="about" className="about-card">



            <div className="about-content">

                <div className="about-left">

                    <p className="about-label">
                        ABOUT ME
                    </p>
                    <div className="about-heading">
                        <h2 className="about-title">
                            From concept
                            <br />to <span className="about-highlight">completion</span>.
                        </h2>

                        <div className="about-divider"></div>
                    </div>

                    <p className="about-description">
                        I enjoy turning ideas into working systems. Whether it's AI, automation, or web applications. Most projects begin as a simple curiosity and evolve into working solutions through experimentation, iteration, and persistence. I'm particularly interested in creating technology that is practical, useful, and enjoyable to use.<br />And yes, I can "Vibe Code" too.
                    </p>



                </div>

                <div className="about-right">

                    <div className="quote-card">

                        <div className="quote-mark">
                            ❝
                        </div>

                        <blockquote className="quote-text">

                            <p>Curiosity starts the project.</p>

                            <p>Discipline finishes it.</p>

                        </blockquote>

                        <div className="quote-author">
                            — Sun Tzu
                        </div>

                    </div>
                </div>

            </div>


        </Section>
    );
}

export default About;