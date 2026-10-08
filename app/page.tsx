"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Bisita",
    category: "WEB DESIGN",
    image: "/Projects/bisita.png",
    description:
      "A digital platform focused on connecting community operations through a streamlined online experience.",
    technologies: ["Web Design", "UI/UX Design", "Responsive Design"],
    overview:
      "Bisita presents a digital experience centered on connecting and organizing community operations.",
    problem:
      "Digital platforms need to present information and workflows clearly so users can navigate the experience with ease.",
    process:
      "Explore the website's layout, navigation, content structure, and overall user experience.",
    impact:
      "The website communicates a focus on connecting community operations through a digital platform. Specific performance results have not been independently verified.",
    url: "https://bisita.com.ph/#1",
  },
  {
    number: "02",
    title: "TourlyTours",
    category: "WEB DESIGN",
    image: "/Projects/tourlytours.png",
    description:
      "A travel platform showcasing tours, destinations, and activities across Thailand.",
    technologies: ["Web Design", "UI/UX Design", "Responsive Design"],
    overview:
      "TourlyTours helps visitors discover tours and activities, with experiences featured in destinations such as Bangkok and Phuket.",
    problem:
      "Travelers need a convenient way to explore destinations, discover experiences, and find tour information.",
    process:
      "The website brings together destination discovery, featured tours, activity listings, and information about the tour service.",
    impact:
      "The platform provides visitors with an online starting point for discovering tours and activities in Thailand.",
    url: "https://www.tourlytours.com/",
  },
  {
    number: "03",
    title: "Murakami",
    category: "WEB DESIGN",
    image: "/Projects/murakami.png",
    description:
      "A creative web design project focused on visual presentation, layout, and user experience.",
    technologies: ["Figma", "Canva", "UI/UX"],
    overview:
      "This portfolio entry links directly to the Murakami website.",
    problem:
      "A website needs a consistent visual identity and well-organized content to communicate its message effectively.",
    process:
      "Explore the live website to review its visual design, content structure, navigation, and user experience.",
    impact:
      "The live website is provided as a reference for reviewing this project. Specific results have not been independently verified.",
    url: "https://murakami.com.ph/",
  },
];

const graphicProjects = [
  {
    number: "01",
    title: "Smarter Track Ad",
    category: "GRAPHICS DESIGN",
    image: "/Projects/Smartertrack.jpg",
    description:
      "A promotional advertising design created for Smarter Track.",
    technologies: ["Graphic Design", "Advertising Design"],
  },
  {
    number: "02",
    title: "CMX Valentine Ad",
    category: "GRAPHICS DESIGN",
    image: "/Projects/Cmxvalentine.jpg",
    description:
      "A Valentine-themed promotional advertisement created for CMX.",
    technologies: ["Graphic Design", "Social Media Design"],
  },
  {
    number: "03",
    title: "OCS Ad",
    category: "GRAPHICS DESIGN",
    image: "/Projects/OCS.jpg",
    description:
      "A promotional advertising design created for OCS.",
    technologies: ["Graphic Design", "Advertising Design"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "ASP.NET",
  "SQL",
  "Bootstrap",
  "WordPress",
  "Figma",
  "Canva",
  "Git",
  "Linux",
  "SAP Business One",
];

const roles = [
  "PROGRAMMER",
  "UI/UX DESIGNER",
  "WEB DESIGNER",
  "TECHNICAL SUPPORT",
];

type WebProject = (typeof projects)[number];
type GraphicProject = (typeof graphicProjects)[number];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6-.01c2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.04 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.79 10h4.5v11h-4.5V10Zm7.31 0h4.31v1.5h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 2.99 5.39 6.88V21h-4.5v-4.39c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32V21h-4.5V10Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.3-.04-1.32-.13-2.51-.13-2.48 0-4.18 1.51-4.18 4.29V10H7.2v3h2.81v8h3.49Z"
      />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [activeCategory, setActiveCategory] = useState("WEB DESIGN");

  const [selectedProject, setSelectedProject] =
    useState<WebProject | null>(null);

  const [selectedCreative, setSelectedCreative] =
    useState<GraphicProject | null>(null);

  // Typing animation for the roles under your name.
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 55 : 95;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayRole.length < currentRole.length) {
          setDisplayRole(
            currentRole.substring(0, displayRole.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else if (displayRole.length > 0) {
        setDisplayRole(
          currentRole.substring(0, displayRole.length - 1)
        );
      } else {
        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      }
    }, !isDeleting && displayRole === currentRole ? 1300 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayRole, isDeleting, roleIndex]);

  // Close modals with Escape and prevent background scrolling.
  useEffect(() => {
    if (!selectedProject && !selectedCreative) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedCreative(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, selectedCreative]);

  const closeMenu = () => setMenuOpen(false);

  const visibleProjects =
    activeCategory === "WEB DESIGN" ? projects : graphicProjects;

  return (
    <main className={lightMode ? "site light-mode" : "site"}>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            A<span>F</span>
          </a>

          <nav
            id="main-navigation"
            className={menuOpen ? "nav-links open" : "nav-links"}
          >
            <a href="#about" onClick={closeMenu}>ABOUT</a>
            <a href="#skills" onClick={closeMenu}>MASTERY</a>
            <a href="#process" onClick={closeMenu}>PROCESS</a>
            <a href="#work" onClick={closeMenu}>PORTFOLIO</a>
            <a href="#experience" onClick={closeMenu}>EXPERIENCES</a>
            <a href="#services" onClick={closeMenu}>CORE OFFERING</a>
            <a href="#contact" onClick={closeMenu}>CONTACT</a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setLightMode((previous) => !previous)}
              aria-label="Toggle color theme"
            >
              {lightMode ? "☾" : "☀"}
            </button>

            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="main-navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">I&apos;M</p>

          <h1>
            Aubrey
            <br />
            Francheska
            <br />
            <span>Escanilla</span>
          </h1>

          <div className="hero-role">
            <span className="role-line" />
            <strong className="typing-role" aria-label={roles[roleIndex]}>
              {displayRole}
              <span className="typing-cursor">|</span>
            </strong>
          </div>

          <p className="hero-description">
            I craft intuitive digital experiences for web and mobile,
            translating complex workflows into elegant interfaces and
            human-centered design systems.
          </p>

          <div className="hero-note">
            Rooted in the Philippines, shaping digital experiences through
            the belief that exceptional design is where empathy meets
            rigorous execution.
          </div>

          <a href="#contact" className="primary-button">
            GET IN TOUCH
          </a>

          <div className="hero-stats">
            <div>
              <strong>1Y</strong>
              <span>TECH EXPERIENCE</span>
            </div>
            <div>
              <strong>IT</strong>
              <span>DEVELOPMENT &amp; SUPPORT</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>QUALITY FOCUSED</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="visual-line line-one" />
          <div className="visual-line line-two" />

          <div className="portrait">
            <img
              src="/profile-transparent.png"
              alt="Aubrey Francheska Escanilla"
            />
          </div>

          <div className="vertical-label">
            DESIGN · DEVELOP · CREATE
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <span>WEB DEVELOPMENT</span>
        <b>✦</b>
        <span>TECHNICAL SUPPORT</span>
        <b>✦</b>
        <span>UI / UX DESIGN</span>
        <b>✦</b>
        <span>PROGRAMMING</span>
        <b>✦</b>
        <span>DIGITAL CREATION</span>
      </div>

      {/* ABOUT MYSELF */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-heading">
            <div className="about-heading-line" />
            <span>PERSONAL PROFILE</span>
            <h2>
              ABOUT <em>MYSELF.</em>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-left">
              <div className="about-photo">
                <img
                  src="/About.jpg"
                  alt="Aubrey Francheska Escanilla"
                />
              </div>

              <div className="about-socials">
                {/* GitHub */}
                <a
                  href="https://github.com/aubreyfrancheskaescanilla13-afk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-icon github"
                >
                  <GitHubIcon />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aubrey-francheska-escanilla-754a8a332"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon linkedin"
                >
                  <LinkedInIcon />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/a.aubwyx_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon instagram"
                >
                  <InstagramIcon />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/a.aubryx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon facebook"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>

            <div className="about-content">
              <h3>
                I&apos;M A{" "}
                <span>
                  UI/UX DESIGNER, WEB DESIGNER, PROGRAMMER &amp; TECHNICAL
                  SUPPORT
                </span>
                .
              </h3>

              <p>
                Hi! I&apos;m Aubrey, an Information Technology graduate with
                experience in technical support, programming, web
                development, information engineering, and digital design.
                I enjoy bridging the gap between technology, creativity,
                and real-world business needs.
              </p>

              <p>
                With hands-on experience in development and IT support, my
                strength lies in transforming complex requirements into
                intuitive digital experiences and functional applications.
                I enjoy working across different areas of technology, from
                designing interfaces and websites to troubleshooting
                systems and building practical software solutions.
              </p>

              <div className="about-philosophy">
                <div className="philosophy-title">
                  <span>❞</span>
                  <strong>DESIGN PHILOSOPHY</strong>
                </div>

                <p>
                  &quot;Great design is not just what it looks like and feels
                  like. Design is how it works, empowering users seamlessly
                  while bridging creativity with structured execution.&quot;
                </p>
              </div>

              <a href="#work" className="about-button">
                MY PROJECTS
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

{/* MASTERY */}
<section className="mastery-section" id="skills">
  <div className="mastery-container">
    <div className="mastery-heading">
      <div>
        <div className="mastery-eyebrow">
          <span />
          EXPERTISE &amp; CAPABILITIES
        </div>

        <h2>
          CORE <em>MASTERY.</em>
        </h2>
      </div>

      <p>
        A strategic combination of technical execution, creative
        interface design, and practical IT operations.
      </p>
    </div>

    <div className="mastery-grid">
      {/* DESIGN & PROTOTYPING */}
      <article className="mastery-card">
        <div className="mastery-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <rect
              x="3.5"
              y="4"
              width="17"
              height="16"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M3.5 9h17"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </div>

        <h3>DESIGN &amp; PROTOTYPING</h3>
        <p>
          Creating intuitive interfaces, organized layouts, and
          engaging digital experiences.
        </p>

        <div className="mastery-tags">
          {[
            "UI/UX Design",
            "Wireframing",
            "User Flows",
            "Prototyping",
            "Figma",
            "Canva",
            "Web Design",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>

      {/* TECHNICAL STACK */}
      <article className="mastery-card">
        <div className="mastery-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3>TECHNICAL STACK</h3>
        <p>
          Developing functional web applications and working with
          programming languages, databases, and web technologies.
        </p>

        <div className="mastery-tags">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "C#",
            "ASP.NET",
            "SQL",
            "Bootstrap",
            "WordPress",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>

      {/* ANALYSIS & OPERATIONS */}
      <article className="mastery-card">
        <div className="mastery-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="m8 12 2.5 2.5L16 9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3>ANALYSIS &amp; OPERATIONS</h3>
        <p>
          Supporting business applications, understanding system
          requirements, and resolving technical issues.
        </p>

        <div className="mastery-tags">
          {[
            "Systems Analysis",
            "Troubleshooting",
            "Technical Support",
            "SAP Business One",
            "Information Engineering",
            "SQL",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>

      {/* WORKFLOW & PROFESSIONAL STRENGTHS */}
      <article className="mastery-card mastery-card-wide">
        <div className="mastery-wide-info">
          <div className="mastery-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="6"
                cy="18"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="18"
                cy="6"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M6 15.5v-5a4 4 0 0 1 4-4h5.5M13 4l2.5 2.5L13 9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="mastery-wide-text">
            <h3>WORKFLOW &amp; PROFESSIONAL STRENGTHS</h3>
            <p>
              Version control, development workflows, collaboration,
              and practical problem-solving.
            </p>
          </div>
        </div>

        <div className="mastery-tags mastery-wide-tags">
          {[
            "Git",
            "GitHub",
            "Linux",
            "Problem-Solving",
            "Communication",
            "Adaptability",
            "Time Management",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </div>
  </div>
</section>

{/* PROCESS */}
<section className="process-section" id="process">
  <div className="process-container">
    {/* Heading */}
    <div className="process-heading">
      <div className="process-eyebrow">
        <span />
        WORKFLOW &amp; METHODOLOGY
      </div>

      <h2>
        WORK <em>PROCESS.</em>
      </h2>
    </div>

    <div className="process-layout">
      {/* Left Content */}
      <div className="process-intro">
        <h3>
          ENGINEERING <span>WEB EXPERIENCES</span>
          <br />
          THROUGH DESIGN
        </h3>

        <p>
          As a UI/UX Designer and Developer, my design
          workflow goes beyond aesthetics. I translate analytical
          data insights and core business requirements into
          user-centered digital solutions.
        </p>

        <p>
          Every website and interface I build follows a strict
          iterative lifecycle—from initial discovery and
          wireframing to high-fidelity design execution and
          developer handoff. By bridging creativity with technical
          feasibility, I aim to create scalable, high-performing
          web applications that resonate with target audiences.
        </p>

        <div className="process-highlight">
          <span />
          HUMAN-CENTERED &amp; SCALABLE EXECUTION
        </div>
      </div>

      {/* Right Process Cards */}
      <div className="process-cards">
        <article className="process-card">
          <div className="process-number">
            <small>STEP</small>
            <strong>01</strong>
          </div>

          <div className="process-card-header">
            <h4>RESEARCH &amp; DEFINE</h4>
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m16 16 4.2 4.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <p>
            Analyzing design briefs, stakeholder needs, and target
            audience insights to define core project requirements
            and uncover creative directions tailored to modern
            branding and web standards.
          </p>

          <div className="process-card-footer">
            <span>FOCUS: DISCOVERY &amp; BRIEF</span>
            <i />
          </div>
        </article>

        <article className="process-card">
          <div className="process-number">
            <small>STEP</small>
            <strong>02</strong>
          </div>

          <div className="process-card-header">
            <h4>ARCHITECTURE &amp; IDEATION</h4>
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="9"
                  y="3"
                  width="6"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <rect
                  x="3"
                  y="16"
                  width="6"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <rect
                  x="15"
                  y="16"
                  width="6"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 8v4M6 16v-4h12v4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <p>
            Structuring intuitive user journeys, information
            architecture, sketching initial creative concepts, and
            building interactive wireframes to establish robust
            visual hierarchies.
          </p>

          <div className="process-card-footer">
            <span>FOCUS: WIREFRAMING &amp; FLOW</span>
            <i />
          </div>
        </article>

        <article className="process-card">
          <div className="process-number">
            <small>STEP</small>
            <strong>03</strong>
          </div>

          <div className="process-card-header">
            <h4>VISUAL &amp; GRAPHIC DESIGN</h4>
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h1.1A4.8 4.8 0 0 0 22 10c0-3.9-4.5-7-10-7Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="7.5" cy="10" r="1" fill="currentColor" />
                <circle cx="10" cy="6.8" r="1" fill="currentColor" />
                <circle cx="15" cy="7.5" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          <p>
            Bringing concepts to life by designing high-fidelity
            user interfaces, responsive layouts, and eye-catching
            graphic branding assets with meticulous attention to
            detail in Figma and Canva.
          </p>

          <div className="process-card-footer">
            <span>FOCUS: UI &amp; ASSETS</span>
            <i />
          </div>
        </article>

        <article className="process-card">
          <div className="process-number">
            <small>STEP</small>
            <strong>04</strong>
          </div>

          <div className="process-card-header">
            <h4>PROTOTYPE &amp; LAUNCH</h4>
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 5.5c2.1-2.1 4.8-2.4 6-2.5-.1 1.2-.4 3.9-2.5 6L11 15.5l-4-4L14 5.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="m7 11.5-3 1-1 4 5-1M11 15.5l-1 3-4 1 1-5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle
                  cx="15.5"
                  cy="7.5"
                  r="1.2"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </div>
          </div>

          <p>
            Iterating through usability testing and interactive
            prototyping, followed by seamless design system
            handoffs and developer asset delivery for optimal
            production.
          </p>

          <div className="process-card-footer">
            <span>FOCUS: TESTING &amp; HANDOFF</span>
            <i />
          </div>
        </article>
      </div>
    </div>
  </div>
</section>


      {/* PORTFOLIO */}
      <section className="section work-section" id="work">
        <div className="section-index">04 / PORTFOLIO</div>

        <div className="section-main">
          <div className="section-heading">
            <p>SELECTED WORK</p>
            <h2>
              Things I&apos;ve
              <br />
              <span>worked on.</span>
            </h2>
          </div>

          <div
            className="portfolio-categories"
            aria-label="Portfolio categories"
          >
            <button
              type="button"
              className={
                activeCategory === "WEB DESIGN"
                  ? "portfolio-category active"
                  : "portfolio-category"
              }
              onClick={() => setActiveCategory("WEB DESIGN")}
              aria-pressed={activeCategory === "WEB DESIGN"}
            >
              Web Design
            </button>

            <button
              type="button"
              className={
                activeCategory === "CREATIVE"
                  ? "portfolio-category active"
                  : "portfolio-category"
              }
              onClick={() => setActiveCategory("CREATIVE")}
              aria-pressed={activeCategory === "CREATIVE"}
            >
              Graphics Design
            </button>
          </div>

          <div className="project-list">
            {visibleProjects.map((project) => {
              const isWebProject = activeCategory === "WEB DESIGN";

              return (
                <article
                  className={
                    isWebProject
                      ? "project-card"
                      : "project-card creative-project-card"
                  }
                  key={`${activeCategory}-${project.number}`}
                >
                  <button
                    type="button"
                    className="project-preview-button"
                    onClick={() => {
                      if (isWebProject) {
                        setSelectedProject(project as WebProject);
                      } else {
                        setSelectedCreative(project as GraphicProject);
                      }
                    }}
                    aria-label={
                      isWebProject
                        ? `View details for ${project.title}`
                        : `View full-size image of ${project.title}`
                    }
                  >
                    <span className="project-image">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                      />
                    </span>
                  </button>

                  <div className="project-top">
                    <span>{project.number}</span>
                    <small>
                      {isWebProject ? "WEB DESIGN" : "GRAPHICS DESIGN"}
                    </small>
                    <b aria-hidden="true">↗</b>
                  </div>

                  <div className="project-body">
                    <h3>
                      {isWebProject ? (
                        <a
                          href={(project as WebProject).url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-title-link"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>

                    <p>{project.description}</p>

                    <div className="technology-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="view-project-hint"
                      onClick={() => {
                        if (isWebProject) {
                          setSelectedProject(project as WebProject);
                        } else {
                          setSelectedCreative(project as GraphicProject);
                        }
                      }}
                    >
                      {isWebProject
                        ? "VIEW PROJECT DETAILS ↗"
                        : "VIEW FULL IMAGE ↗"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEB DESIGN PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <div className="project-modal-image">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} project preview`}
              />
            </div>

            <div className="project-modal-content">
              <p className="project-modal-eyebrow">
                {selectedProject.number} | WEB DESIGN &amp; DEVELOPMENT
              </p>

              <h2 id="project-modal-title">
                {selectedProject.title}
              </h2>

              <p className="project-modal-overview">
                {selectedProject.overview}
              </p>

              <div className="project-detail-block">
                <h3>THE PROBLEM (WHY):</h3>
                <p>{selectedProject.problem}</p>

                <h3>THE PROCESS:</h3>
                <p>{selectedProject.process}</p>

                <h3>PROJECT OUTCOME:</h3>
                <p>{selectedProject.impact}</p>
              </div>

              <div className="project-modal-technologies">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-explore-button"
              >
                EXPLORE PROJECT ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* GRAPHICS DESIGN IMAGE PREVIEW */}
      {selectedCreative && (
        <div
          className="creative-modal-overlay"
          onClick={() => setSelectedCreative(null)}
        >
          <div
            className="creative-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCreative.title} full-size preview`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="creative-modal-close"
              onClick={() => setSelectedCreative(null)}
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              src={selectedCreative.image}
              alt={`${selectedCreative.title} full-size preview`}
            />
          </div>
        </div>
      )}

      {/* EXPERIENCE */}
      <section
        className="dark-section experience-section"
        id="experience"
      >
        <div className="section dark-inner">
          <div className="section-index">05 / EXPERIENCES</div>

          <div className="section-main">
            <div className="section-heading">
              <p>PROFESSIONAL BACKGROUND</p>
              <h2>
                My professional
                <br />
                <span>journey.</span>
              </h2>
            </div>

            <div className="experience-list">
              <div className="experience-item">
                <span>2026</span>
                <div>
                  <h3>Information Engineer / Programmer</h3>
                  <p>
                    Developed and maintained internal applications, worked
                    with web technologies, handled system troubleshooting,
                    and collaborated with teams on software-related
                    concerns.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <span>2026</span>
                <div>
                  <h3>Web and UI/UX Designer</h3>
                  <p>
                    Designed websites, digital layouts, user interfaces,
                    and creative assets using Figma, Canva, WordPress, and
                    other digital tools.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <span>2025</span>
                <div>
                  <h3>Technical Support</h3>
                  <p>
                    Provided technical support to users, assisted with
                    hardware and software troubleshooting, helped resolve
                    technical issues, and supported day-to-day IT
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* SERVICES SECTION */}
<section id="services" className="services-section">
  <div className="services-container">
    <div className="services-header">
      <div className="services-heading">
        <div className="section-index">
          <span className="section-line" />
          <span>CORE OFFERINGS</span>
        </div>

        <h2>
          WHAT I <span>PROVIDE.</span>
        </h2>
      </div>

      <p className="services-intro">
        Bridging the gap between creative aesthetic vision and
        technical execution—delivering digital solutions from
        concept to launch.
      </p>
    </div>

    <div className="services-grid">
      <article className="service-card">
        <div className="service-card-top">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="4"
                width="18"
                height="13"
                rx="1.5"
              />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>

          <div className="service-number">
            <span>01</span>
            <small>SERVICE 01</small>
          </div>
        </div>

        <h3>WEB DESIGN</h3>
        <p>
          Designing clean, responsive, and user-centered
          websites with intuitive navigation, modern layouts,
          and engaging digital experiences.
        </p>
      </article>

      <article className="service-card">
        <div className="service-card-top">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h.9A4 4 0 0 0 21 10.6 8 8 0 0 0 12 3Z" />
              <path d="M7.5 10h.01M10 7h.01M15 7.5h.01M17 11h.01" />
            </svg>
          </div>

          <div className="service-number">
            <span>02</span>
            <small>SERVICE 02</small>
          </div>
        </div>

        <h3>GRAPHIC DESIGN</h3>
        <p>
          Creating compelling visual assets, digital graphics,
          and cohesive branding that communicate ideas and
          connect with audiences.
        </p>
      </article>

      <article className="service-card">
        <div className="service-card-top">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20v-1.5A5.5 5.5 0 0 1 8 13h2a5.5 5.5 0 0 1 5.5 5.5V20" />
              <path d="M16 4.8a3.5 3.5 0 0 1 0 6.5M18 13.5a5.5 5.5 0 0 1 3.5 5.1V20" />
            </svg>
          </div>

          <div className="service-number">
            <span>03</span>
            <small>SERVICE 03</small>
          </div>
        </div>

        <h3>TECHNICAL SUPPORT</h3>
        <p>
          Troubleshooting technical issues, assisting users
          with computer systems, and providing practical
          solutions to improve technology and workflow.
        </p>
      </article>

      <article className="service-card">
        <div className="service-card-top">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect
                x="5"
                y="5"
                width="14"
                height="17"
                rx="2"
              />
              <path d="M9 5V3h6v2M9 13l2 2 4-4" />
            </svg>
          </div>

          <div className="service-number">
            <span>04</span>
            <small>SERVICE 04</small>
          </div>
        </div>

        <h3>PROGRAMMER</h3>
        <p>
          Developing and maintaining functional digital
          solutions through programming, debugging, and
          building responsive web applications.
        </p>
      </article>
    </div>
  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="contact-section">
  <div className="contact-shell">
    <div className="contact-layout">
      <div className="contact-left">
        <div className="contact-kicker">
          <span className="section-line" />
          <span>GET IN TOUCH</span>
        </div>

        <h2>
          LET’S DISCUSS YOUR <span>PROJECT</span>
        </h2>

        <p className="contact-intro">
          I&apos;d love to hear about your vision! Whether you have an
          exciting freelance project or a creative collaboration in mind,
          let&apos;s build something exceptional together.
        </p>

        <div className="contact-details">
          <div className="contact-detail">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <div>
              <span className="contact-label">ADDRESS:</span>
              <h3>Teresa, Rizal</h3>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <div>
              <span className="contact-label">MY EMAIL:</span>
              <a href="mailto:aubreyfrancheskaescanilla13@gmail.com">
                aubreyfrancheskaescanilla13@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.9L7.2 10.4a16 16 0 0 0 6.4 6.4l1.8-1.8a2 2 0 0 1 1.9-.6l3 .5a2 2 0 0 1 1.7 2Z" />
              </svg>
            </div>

            <div>
              <span className="contact-label">CALL ME NOW:</span>
              <a href="tel:+639241296235">+63 924 129 6235</a>
            </div>
          </div>
        </div>

        <div className="contact-socials" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/aubrey-francheska-escanilla-754a8a332"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="contact-social"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.facebook.com/a.aubryx/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="contact-social"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/aubreyfrancheskaescanilla13-afk"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="contact-social"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.instagram.com/a.aubwyx_"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="contact-social"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-form-top">
          I&apos;m always open to discussing product design work or
          partnership opportunities.
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/aubreyfrancheskaescanilla13@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />

          <div className="contact-form-row">
            <div className="contact-field">
              <input id="contact-name" type="text" name="name" placeholder="Name*" autoComplete="name" required />
            </div>

            <div className="contact-field">
              <input id="contact-email" type="email" name="email" placeholder="Email*" autoComplete="email" required />
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-field">
              <input id="contact-location" type="text" name="location" placeholder="Location*" required />
            </div>

            <div className="contact-field">
              <input id="contact-budget" type="text" name="budget" placeholder="Budget*" required />
            </div>
          </div>

          <div className="contact-field">
            <input id="contact-subject" type="text" name="subject" placeholder="Subject*" required />
          </div>

          <div className="contact-field">
            <textarea id="contact-message" name="message" rows={5} placeholder="Message*" required />
          </div>

          <button type="submit" className="contact-submit">
            SUBMIT <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-bar">
          <a href="#home" className="footer-brand" aria-label="Home">
            <span className="footer-brand-mark">A</span>
            <span className="footer-brand-name">AUBREY.DEV</span>
          </a>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">ABOUT</a>
            <a href="#skills">MASTERY</a>
            <a href="#projects">PROJECTS</a>
            <a href="#experience">EXPERIENCES</a>
            <a href="#services">SERVICES</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>

        <div className="footer-meta">
          <span>Copyright © 2026 Aubrey Francheska Escanilla.</span>
          <span>DEVELOPED BY AUBREY FRANCHESKA ESCANILLA</span>
        </div>
      </footer>
    </main>
  );
}
