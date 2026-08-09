import Section from "../components/layout/Section";
import "../styles/hero.css";

function Hero() {
    return (
        <Section
            id="hero"
            className="hero-card"
        >


            <div className="hero-left">

                <div className="hero-badge">
                    <span className="status-dot"></span>Open to Opportunities

                </div>

                <h1 className="hero-title">
                    Hey there, I am <span className="hero-name">Raja Chandra Appana</span>,
                    <br />
                    you can call me <span className="hero-highlight">ARC</span> for short.
                </h1>

                <p className="hero-role">
                    AI & SOFTWARE DEVELOPER
                </p>

                <p className="hero-description">
                    Building intelligent systems,
                    computer vision applications,
                    and modern web experiences.
                </p>

                <div className="hero-actions">

                    <button className="hero-primary-btn">
                        View Projects →
                    </button>

                    <button className="hero-secondary-btn">
                        ✉ Contact Me
                    </button>

                </div>

                <div className="hero-scroll">
                    <span className="scroll-icon"></span><span>Scroll to explore</span>
                </div>

            </div>

            <div className="hero-right">

                <div className="hero-portrait">

                    Portrait Placeholder

                </div>

            </div>


        </Section>
    );
}

export default Hero;