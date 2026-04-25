const resumeHref = "/resume/Sachin-S-Thankachan-Resume.pdf"
const portraitHref = "/images/sachin-pic-cutout.png"

const projects = [
  {
    title: "DevInsight",
    timeframe: "Feb 2025",
    category: "AI Code Intelligence",
    stack: ["Next.js", "React", "ChromaDB", "Groq LLM"],
    summary:
      "An AI code analysis platform that uses vector search to navigate large codebases faster and generate documentation from natural language queries.",
    highlights: [
      "Built indexed codebase embeddings with ChromaDB for faster repo understanding",
      "Reached 85% retrieval accuracy and reduced comprehension time by 60%",
    ],
    primaryLabel: "Website",
    primaryHref: "https://dev-in-sight-v2.vercel.app/",
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/sach2004/DevInSight-v2-",
    visual: "RETRIEVAL // DOCUMENTATION // CODEBASE SEARCH",
  },
  {
    title: "SamajAI",
    timeframe: "May 2025",
    category: "AI Education Product",
    stack: ["Next.js", "Gemini AI", "Prisma", "PostgreSQL"],
    summary:
      "An edtech platform that localizes English educational content into Indian languages with AI adaptation, voice narration, and learning workflows.",
    highlights: [
      "Localized lessons with cultural adaptation such as dollar-to-rupee and food-context changes",
      "Added voice teacher, chatbot, PDF translator, and quiz generation on a Prisma + PostgreSQL backend",
    ],
    primaryLabel: "Website",
    primaryHref: "https://samaj-ai.vercel.app/",
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/sach2004/samajAI",
    visual: "LOCALIZATION // VOICE // EDUCATION AI",
  },
  {
    title: "Campus Link",
    timeframe: "2025",
    category: "Career Networking Platform",
    stack: ["Next.js", "NextAuth", "Prisma", "PostgreSQL", "Tailwind CSS"],
    summary:
      "A full-stack platform bridging students and alumni through role-based authentication, opportunity posting, and real-time application tracking.",
    highlights: [
      "Built separate student and alumni auth flows with Google OAuth and JWT sessions",
      "Designed Prisma schemas with many-to-many relationships for applications and opportunities",
    ],
    primaryLabel: "Website",
    primaryHref: "https://campus-connect-v2-seven.vercel.app/",
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/sach2004/CampusConnectV2",
    visual: "NETWORKING // STUDENTS // ALUMNI // OPPORTUNITIES",
  },
  {
    title: "AAC GRIET Website",
    timeframe: "2024",
    category: "Institutional Web Presence",
    stack: ["Next.js", "React", "Responsive UI", "Content Architecture"],
    summary:
      "The official AAC GRIET website built to present events, research, news, club activities, and the organization’s digital identity clearly.",
    highlights: [
      "Structured the site around discoverable sections for events, research, administration, and student initiatives",
      "Improved the team’s digital presence with a polished, production-facing institutional website",
    ],
    primaryLabel: "Website",
    primaryHref: "https://www.aacgriet.com/",
    secondaryLabel: "Leadership",
    secondaryHref: "#contact",
    visual: "AAC // EVENTS // RESEARCH // DIGITAL PRESENCE",
  },
  {
    title: "Hostel-Hub",
    timeframe: "2025",
    category: "Role-Based Platform",
    stack: ["Next.js", "React", "Prisma", "NextAuth", "Tailwind CSS"],
    summary:
      "A hostel exit approval system that digitizes student requests, admin approvals, and audit visibility through a role-based dashboard.",
    highlights: [
      "Built student request submission and admin approve-reject workflows with activity tracking",
      "Structured the system around secure auth, Prisma models, and a dashboard-first UX",
    ],
    primaryLabel: "Website",
    primaryHref: "https://hostel-exit-mgmt.vercel.app/",
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/sach2004/hostel-exit-mgmt",
    visual: "HOSTEL // APPROVALS // ACTIVITY TRACKING",
  },
  {
    title: "Karza",
    timeframe: "2024",
    category: "Fintech Workflow",
    stack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Twilio"],
    summary:
      "A loan management and repayment tracking system built to simplify peer-to-peer lending with reminders, visibility, and accountability baked into the workflow.",
    highlights: [
      "Handled lender and borrower tracking with transaction visibility and request approvals",
      "Added automated repayment reminders with Twilio, Multer uploads, and scheduled jobs via node-cron",
    ],
    primaryLabel: "Website",
    primaryHref: "https://karza-iota.vercel.app/",
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/sach2004",
    visual: "LOANS // REMINDERS // REPAYMENT TRACKING",
  },
  {
    title: "SolSuite",
    timeframe: "2025",
    category: "Web3 Developer Toolkit",
    stack: ["Next.js", "React", "Solana Web3.js", "SPL Token SDK", "Tailwind CSS"],
    summary:
      "A Solana-focused developer toolkit that brings wallet flows, Devnet airdrops, and token-launch utilities into one unified interface.",
    highlights: [
      "Built tab-based modules for airdrops, token launch workflows, and DEX-oriented utilities",
      "Added wallet integration, loading states, and developer-friendly feedback for blockchain actions",
    ],
    primaryLabel: "Website",
    primaryHref: "https://sol-app-lime.vercel.app/",
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/sach2004/sol_app",
    visual: "SOLANA // AIRDROP // TOKEN LAUNCHER",
  },
  {
    title: "AdoptAPaw",
    timeframe: "2025",
    category: "Consumer Web App",
    stack: ["Next.js", "JavaScript", "Prisma", "Tailwind CSS"],
    summary:
      "A pet adoption platform focused on helping users discover and connect with the right companion through a clean, approachable experience.",
    highlights: [
      "Built the core adoption browsing experience and shipped it as a live consumer-facing product",
      "Focused on discoverability, responsiveness, and a simple path from browsing to action",
    ],
    primaryLabel: "Website",
    primaryHref: "https://adopt-a-paw-amber.vercel.app/",
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/sach2004/AdoptAPaw",
    visual: "PET DISCOVERY // ADOPTION // MATCHING",
  },
]

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "BuildBit",
    duration: "Mar 2025 - Present",
    stack: "Node.js, Express.js, MongoDB, Firebase Auth, FCM, AWS S3",
    bullets: [
      "Engineered backend systems for a food rescue platform with User, Vendor, and Admin domains protected by Firebase Auth middleware.",
      "Built transactional order flows using MongoDB sessions, stock deduction, QR pickup verification, and a 9-state status machine with event-based notifications.",
      "Delivered admin analytics with aggregation pipelines, KPI dashboards, time-series graphs, and export support for Excel and PDF.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "BytesEdge",
    duration: "Jan 2025 - Mar 2025",
    stack: "Node.js, Express, MongoDB, REST APIs",
    bullets: [
      "Shipped backend features across user management, activity tracking, profiles, analytics, notices, and admin workflows.",
      "Designed a service-based architecture to separate API layers, business logic, and shared utilities cleanly.",
      "Built CRUD APIs, role-based access control, form-driven workflows, Mongoose schemas, and error-handling middleware.",
    ],
  },
]

const skillColumns = [
  {
    title: "Backend Systems",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    title: "Frontend Delivery",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML/CSS", "TypeScript"],
  },
  {
    title: "AI & Problem Solving",
    items: ["OpenAI SDK", "RAG", "LangChain", "LangGraph", "Gemini AI", "LeetCode 1600+", "300+ problems"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "AWS", "Git", "GitHub", "Prometheus", "Grafana", "Vercel", "Postman"],
  },
]

const achievements = [
  "Winner - Encode 2025 Hackathon, MREC",
  "Winner - Vivitsu 2025 Hackathon, GRIET",
  "Winner - Udhgam 2025 Hackathon, Woxsen",
  "Winner - GenAI Hackathon, GRIET",
  "Finalist - Robotics Competition, IIT BHU",
]

const leadership = [
  "Developed and maintained the official AAC website, improving its digital presence.",
  "Mentored 25+ students in MERN stack and Next.js development.",
  "Organized workshops, hackathons, and ideathons for 500+ participants.",
  "Led new technical initiatives including AI and ML integration workshops.",
]

const education = [
  {
    school: "Gokaraju Rangaraju Institute of Engineering and Technology",
    detail: "B.Tech Computer Science | 2023-2027",
    score: "GPA: 8.54/10",
  },
  {
    school: "Sri Chaitanya Junior College",
    detail: "Class XII (MPC) | 2021-2023",
    score: "Percentage: 96.3%",
  },
  {
    school: "Bharatiya Vidya Bhavan's Public School",
    detail: "High School | 2008-2020",
    score: "Percentage: 88%",
  },
]

const profileLinks = [
  { label: "Email", href: "mailto:sachinthankachan0605@gmail.com", display: "sachinthankachan0605@gmail.com" },
  { label: "Phone", href: "tel:+919391876937", display: "+91 9391876937" },
  { label: "GitHub", href: "https://github.com/sach2004", display: "github.com/sach2004" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin-thankachan-53071622b/",
    display: "linkedin.com/in/sachin-thankachan-53071622b",
  },
  { label: "LeetCode", href: "https://leetcode.com/u/23241A0548/", display: "leetcode.com/u/23241A0548" },
  { label: "X", href: "https://x.com/Sachhhh0605", display: "x.com/Sachhhh0605" },
]

export default function Home() {
  return (
    <>
      <nav>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
        >
          <a href="#top" className="logo">
            SST
          </a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href={resumeHref} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-text">
          <p className="hero-tagline">FULL-STACK ENGINEER // BACKEND SYSTEMS // AI APPLICATIONS</p>
          <h1>SACHIN S THANKACHAN</h1>
          <p className="hero-summary">
            Full-stack engineer specializing in backend systems and AI-powered applications, with experience building
            scalable APIs, real-time systems, and GenAI platforms.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="brutal-btn">
              VIEW PROJECTS
            </a>
            <a href={resumeHref} className="secondary-btn" target="_blank" rel="noreferrer">
              OPEN RESUME
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="portrait-frame">
            <div className="portrait-backdrop"></div>
            <img src={portraitHref} alt="Sachin S Thankachan portrait" className="portrait-image" />
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          NODE.JS // EXPRESS // NEXT.JS // TYPESCRIPT // MONGODB // POSTGRESQL // RAG // LANGCHAIN // OPENAI SDK //
          DOCKER // KUBERNETES // AWS // GENAI HACKATHON WINNER // NODE.JS // EXPRESS // NEXT.JS // TYPESCRIPT //
          MONGODB // POSTGRESQL // RAG // LANGCHAIN // OPENAI SDK // DOCKER // KUBERNETES // AWS //
        </div>
      </div>

      <h2 className="section-title" id="experience">
        Experience
      </h2>

      <section className="services experience-grid">
        {experiences.map((experience) => (
          <article className="service-box experience-card" key={`${experience.company}-${experience.duration}`}>
            <p className="experience-duration">{experience.duration}</p>
            <h3>
              {experience.role}
              <br />
              {experience.company}
            </h3>
            <p className="experience-stack">{experience.stack}</p>
            <ul className="impact-list">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <h2 className="section-title" id="projects">
        Featured Projects
      </h2>

      <section className="projects">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-visual">{project.visual}</div>
            <div className="project-tags">
              <span className="tag">{project.category}</span>
              <span className="tag">{project.timeframe}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <p className="project-stack">{project.stack.join(" // ")}</p>
            <div className="project-links">
              <a
                href={project.primaryHref}
                target={project.primaryHref.startsWith("#") ? undefined : "_blank"}
                rel="noreferrer"
              >
                {project.primaryLabel}
              </a>
              <a
                href={project.secondaryHref}
                target={project.secondaryHref.startsWith("#") ? undefined : "_blank"}
                rel="noreferrer"
              >
                {project.secondaryLabel}
              </a>
            </div>
          </article>
        ))}
      </section>

      <h2 className="section-title" id="achievements">
        Achievements
      </h2>

      <section className="services achievements-grid">
        {achievements.map((achievement) => (
          <article className="service-box achievement-card" key={achievement}>
            <h3>{achievement.split(" - ")[0]}</h3>
            <p>{achievement.split(" - ").slice(1).join(" - ")}</p>
          </article>
        ))}
      </section>

      <h2 className="section-title" id="skills">
        Technical Edge
      </h2>

      <section className="services skills-grid">
        {skillColumns.map((column) => (
          <article className="service-box skill-card" key={column.title}>
            <h3>{column.title}</h3>
            <ul className="skill-list">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <h2 className="section-title" id="leadership">
        Leadership
      </h2>

      <section className="leadership-section">
        <div className="leadership-content">
          <p className="experience-duration">Oct 2023 - Present</p>
          <h3>AAC | Web Development Core Team & Mentor</h3>
          <ul className="impact-list">
            {leadership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <h2 className="section-title" id="education">
        Education
      </h2>

      <section className="services education-section-grid">
        {education.map((item) => (
          <article className="service-box" key={item.school}>
            <h3>{item.school}</h3>
            <p className="experience-duration">{item.detail}</p>
            <p className="experience-stack">{item.score}</p>
          </article>
        ))}
      </section>

      <section className="contact" id="contact">
        <div className="contact-left">
          <h2 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontFamily: "Archivo Black, sans-serif", textTransform: "uppercase", lineHeight: "0.95", marginBottom: "24px" }}>
            LET&apos;S<br />BUILD.
          </h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "400px", marginBottom: "40px" }}>
            Available for backend engineering, full-stack product work, and AI application builds.
          </p>
          <div className="contact-links-vertical">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-row">
                <span>{link.label.toUpperCase()}</span>
                <span>{link.display}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-right">
          <a href={resumeHref} className="resume-cta" target="_blank" rel="noreferrer">
            <span className="resume-cta-label">RESUME</span>
            <span className="resume-cta-title">FULL BREAKDOWN</span>
            <span className="resume-cta-desc">Projects, skills, and experience — all in one doc.</span>
            <span className="resume-cta-btn">DOWNLOAD →</span>
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 SACHIN S THANKACHAN. BUILT FOR BACKEND SYSTEMS, PRODUCT DELIVERY, AND AI-POWERED WORK.</p>
        <div style={{ marginTop: "20px", fontSize: "0.8rem" }}>
          NEXT.JS PORTFOLIO WITH BRUTALIST ENERGY AND REAL PROJECT DEPTH.
        </div>
      </footer>
    </>
  )
}
