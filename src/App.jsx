import Contact from "./contact";
import Projects from "./projects";
import MobileNav from "./MobileNav";
import "./about.css";
import "./background.css";
import "./featured.css";
import "./footer.css";
import "./header.css";
import "./hero.css";
import "./mobile-nav.css";
import "./ModernNormalized.css";
import "./projectphoto.css";
import "./styles.css";
import "./util.css";
import "./work.css";
import "./contact.css";
import ModelViewer from "./ModelViewer";
import javaimg from "./assets/java.png";
import jsimg from "./assets/js.png";
import reactimg from "./assets/atom.png";
import htmlimg from "./assets/html-5.png";
import cssimg from "./assets/css.png";
import sql from "./assets/sql.png";

import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import myProfile from "./assets/my profile.jpeg";
import { useState } from "react";

function App() {
  const data = [
    { gif: javaimg, link: "https://www.java.com/en/" },
    {
      gif: jsimg,
      link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    },
    { gif: reactimg, link: "https://react.dev/" },
    {
      gif: htmlimg,
      link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    },
    { gif: cssimg, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { gif: sql, link: "https://dev.mysql.com/" },
  ];
  const social = [
    {
      gif: facebook,
      link: "https://www.facebook.com/share/HpHgZkVrdxEsnpaE/?mibextid=qi2Omg",
    },
    {
      gif: instagram,
      link: "https://www.instagram.com/raj_cby?igsh=aHlqZHJ5cXd5MHRt",
    },
    {
      gif: linkedin,
      link: "https://www.linkedin.com/in/raj-chakraborty-010793222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { gif: github, link: "https://github.com/GENTLEW1ND" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  function confirmDownload() {
    // Show a confirmation dialog
    if (window.confirm("Do you want to download the resume?")) {
      // If user confirms, initiate the download
      var link = document.createElement("a");
      link.href = "./assets/my profile.jpeg";
      link.download = "my_profile.jpeg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  
  
  return (
    <>
      <div>
        <section className="background_motion">
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </section>

        <header className="header container">
          <nav>
            <ul className="header__menu">
              <li>
                <a className="header__link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="header__link" href="#feature">
                  Work
                </a>
              </li>
              <li>
                <a className="header__link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="header__line"></li>
              <li>
                <button className="header__resume btn" onClick={()=>confirmDownload()}>
                  Resume
                </button>
              </li>
            </ul>

            <button
              className="header__bars"
              onClick={() => handleMobileMenuToggle()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isMobileMenuOpen && <MobileNav />}
          </nav>
        </header>
        {/* <MobileNav/> */}

        <div>
          <section className="hero container section">
            <img className="hero__img" src={myProfile} alt="Profile" />
            <h2 className="hero__sub">Raj Chakraborty</h2>
            <h1 className="hero__title">
              enthusiastic <br /> programmer
            </h1>
            <p className="hero__description">
              Being an enthusiastic programmer is not just about writing code;{" "}
              <strong>its a mindset</strong>, a way of life. Its about embracing
              challenges with a smile. , diving headfirst into problems, and
              emerging with elegant solutions. My passion for programming
              ignites my <strong>creativity</strong>, fuels my{" "}
              <strong>curiosity</strong>, and drives me to{" "}
              <strong>constantly learn and grow</strong>.
            </p>
            <div className="social-container">
              <ul className="inner-ul container ">
                {social.map((el, i) => (
                  <li key={i}>
                    <a href={el.link} target="_blank" rel="noopener noreferrer">
                      <img src={el.gif} alt="hello" className="image-social" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div id="about" className="about container section">
            <div className="about__content">
              <h2 className="about__title">About Me</h2>
              <p className="about__description">
                Hey there, I’m Raj Chakraborty! A <a>Computer Science</a>{" "}
                student who’s just as comfortable diving into code as I am
                crafting seamless user experiences.
              </p>
              <p className="about__description">
                I find immense satisfaction in working with team, where i can
                contribute my skills and expertise towards acheiving our shared
                goals through collaboration i.e<a> Team-Oriented </a> and{" "}
                <a>Collaborative</a> individual.
              </p>
              <p className="about__description">
                I am always seeking opportunities where i can acquire new
                knowledge and contribute my expertise i.e
                <a>Knowledge Enthusiasts</a>.
              </p>
              <hr className="about__hr" />
              <h1 className="about__sub">Expertise</h1>
              <div className="about__ul-container">
                <ul className="inner-ul container">
                  {data.map((el, i) => (
                    <li key={i}>
                      <a
                        href={el.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={el.gif} alt="hello" className="image" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <section id="feature" className="featured container section">
            <h1>Projects</h1>
            <Projects />
          </section>

          <section className="contact-container container ">
            <div className="contact" id="contact">
              <Contact />
            </div>
            <div>
              <div className="model-container container">
                <ModelViewer />
              </div>
            </div>
          </section>
        </div>
        <p className="footer__title">--2024 Copyright--</p>
      </div>
    </>
  );
}

export default App;
