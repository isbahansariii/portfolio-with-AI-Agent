"use client";

import { useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { experience, profile, projects, skills } from "@/lib/data";
import Navbar from "./Navbar";
import AIChat from "./AIChat";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section scroll-mt-24">
      <div className="container">
        <div className="section-label">
          <span>{title}</span>
          <i />
        </div>
        {children}
      </div>
    </section>
  );
}

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  function move(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-y * 7}deg`);
    el.style.setProperty("--ry", `${x * 9}deg`);
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  }
  function leave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }
  return (
    <article
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`tilt-card ${className}`}
    >
      {children}
    </article>
  );
}

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="availability">
                <span className="status-dot" /> Available for freelance project or remote opportunities
              </div>
              <div className="eyebrow">
                <span>Frontend Developer</span>
                <span className="eyebrow-line" />
                <span>Software Engineer</span>
              </div>
              <h1>
                Building digital
                <br />
                <span>experiences</span> with depth.
              </h1>
              <p className="hero-text">
                I'm Isbah - a frontend developer focused on Next.js, React.js
                and Redux. I turn complex product requirements into clean,
                responsive and maintainable interfaces.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explore work <ArrowUpRight size={17} />
                </a>
                <a href="#ai" className="button button-ghost">
                  <Sparkles size={16} /> Ask my AI
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <MapPin size={15} /> {profile.location}
                </span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={15} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="code-orb">
                <div className="orb-top">
                  <span className="window-dot" />
                  <span className="window-dot" />
                  <span className="window-dot" />
                  <span className="orb-title">isbah.dev</span>
                </div>
                <div className="code-lines">
                  <span>
                    <b>01</b> const developer = {"{"}
                  </span>
                  <span>
                    <b>02</b>&nbsp; name: <em>"Isbah"</em>,
                  </span>
                  <span>
                    <b>03</b>&nbsp; stack: [<em>"Next.js"</em>,
                  </span>
                  <span>
                    <b>04</b>&nbsp;&nbsp;&nbsp;&nbsp;<em>"React"</em>,{" "}
                    <em>"Redux"</em>],
                  </span>
                  <span>
                    <b>05</b>&nbsp; mindset: <em>"clean"</em>,
                  </span>
                  <span>
                    <b>06</b>&nbsp; coffee: <em>true</em>
                  </span>
                  <span>
                    <b>07</b> {"}"}
                  </span>
                </div>
                <div className="orb-status">
                  <span /> building something useful
                </div>
              </div>
              <div className="float-chip chip-one">
                <Code2 size={15} /> Next.js
              </div>
              <div className="float-chip chip-two">
                <Sparkles size={15} /> AI-ready
              </div>
              <div className="float-chip chip-three">
                <span className="mini-dot" /> Clean UI
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <Section id="about" title="About">
          <div className="about-grid">
            <div>
              <h2>
                Simple on the surface.
                <br />
                <span>Thoughtful underneath.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>{profile.summary}</p>
              <p>
                My current work combines Next.js frontend development, state
                management, API integration, UI improvements and practical
                security measures such as input sanitization.
              </p>
              <p>
                I care about the details that make software feel trustworthy:
                clear hierarchy, responsive behavior, reusable components and
                code another developer can understand.
              </p>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="experience-list">
            {experience.map((e, i) => (
              <TiltCard key={e.company} className="experience-card">
                <div className="experience-index">0{i + 1}</div>
                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <h3>{e.role}</h3>
                      <p>{e.company}</p>
                    </div>
                    <span>{e.date}</span>
                  </div>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Selected work">
          <div className="projects-grid">
            {projects.map((p, i) => (
              <TiltCard
                key={p.title}
                className={`project-card ${i === 0 ? "featured" : ""}`}
              >
                <div className="project-no">0{i + 1}</div>
                <div className="project-top">
                  <span>{p.type}</span>
                  <Code2 size={19} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub <Github size={14} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      Live demo <ExternalLink size={14} />
                    </a>
                  )}
                  <span className="project-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills-layout">
            <div>
              <h2>
                Tools I use to turn
                <br />
                <span>ideas into interfaces.</span>
              </h2>
              <p className="muted">
                A frontend-first toolkit with enough backend knowledge to
                understand the whole product.
              </p>
            </div>
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items]) => (
                <TiltCard key={group} className="skill-card">
                  <h3>{group}</h3>
                  <div>
                    {items.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </Section>

        <Section id="ai" title="Ask My AI">
          <div className="ai-banner">
            <div className="ai-ring">
              <Sparkles size={25} />
            </div>
            <div>
              <span className="mini-label">Interactive assistant</span>
              <h2>Want to know how I work?</h2>
              <p>
                Ask my AI assistant about my stack, projects, experience,
                working style, or how to hire me.
              </p>
            </div>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-ai"))}
              className="button button-primary"
            >
              Start conversation <ArrowUpRight size={17} />
            </button>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contact-grid">
            <div>
              <h2>
                Let’s build something
                <br />
                <span>useful.</span>
              </h2>
              <p className="muted">
                For opportunities, freelance work or collaboration, send me a
                message or connect through LinkedIn or GitHub.
              </p>
              <div className="contact-links">
                <a href={"mailto:" + profile.email}>
                  <Mail size={17} />
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={17} />
                  GitHub
                </a>
              </div>
            </div>
            <TiltCard className="contact-card">
              <div className="contact-card-top">
                <BriefcaseBusiness size={20} />
                <span>Available for opportunities</span>
              </div>
              <h3>Have a project in mind?</h3>
              <p>Tell me what you're building and I'll get back to you.</p>
              <a
                href={"mailto:" + profile.email + "?subject=Project%20Inquiry"}
                className="button button-primary"
              >
                Email me <Mail size={16} />
              </a>
            </TiltCard>
          </div>
        </Section>
      </main>
      <AIChat />
      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Isbah Ansari</span>
          <span>Next.js · TypeScript · Tailwind CSS</span>
        </div>
      </footer>
    </>
  );
}
