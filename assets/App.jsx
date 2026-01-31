import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : "light"}>
      <nav>
        <h2>Jack</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={() => setDark(!dark)}>
          {dark ? "🌞" : "🌙"}
        </button>
      </nav>

      <main className="container">

        {/* HOME */}
        <section id="home">
          <h1>Jack Samson</h1>
          <h3>Cloud & DevOps Engineer</h3>
          <p className="subtitle">
            AWS | Docker | Jenkins | Kubernetes | Terraform | Linux
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn">View Projects</a>
            <a href="/assets/resume.pdf" className="btn-outline">Resume</a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="glass slide-left">
            <h2>About Me</h2>
            <p>
              I am a Cloud and DevOps Engineer with hands-on experience as a
              System Administrator. I specialize in deploying, automating,
              and managing cloud infrastructure using AWS and DevOps tools.
            </p>
            <p>
              I have practical experience in CI/CD pipelines, containerization,
              and Linux server administration. I enjoy solving real-world
              infrastructure problems and continuously learning modern DevOps
              practices.
            </p>

            {/* ATS hidden keywords */}
            <span className="ats">
              AWS EC2 S3 IAM CloudWatch Jenkins Docker Kubernetes Terraform
              Linux GitHub CI CD DevOps Cloud Engineer
            </span>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="grid">
            <div className="card">AWS (EC2, S3, IAM, CloudWatch)</div>
            <div className="card">Docker & Containers</div>
            <div className="card">Jenkins CI/CD</div>
            <div className="card">Kubernetes</div>
            <div className="card">Terraform (IaC)</div>
            <div className="card">Linux Administration</div>
            <div className="card">Git & GitHub</div>
            <div className="card">Jira, ServiceNow</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>Projects</h2>

          <div className="grid">
            <div className="card slide-up">
              <h3>CI/CD Login Portal on AWS</h3>
              <p>
                Built an automated CI/CD pipeline using Jenkins to deploy a
                login portal application on AWS EC2 with GitHub integration.
              </p>
              <small>Jenkins • AWS • Linux • GitHub</small>
            </div>

            <div className="card slide-up">
              <h3>Frontend Web App Deployment</h3>
              <p>
                Deployed a frontend application on AWS EC2, configured Linux
                server, security groups, and monitoring.
              </p>
              <small>AWS EC2 • Linux • Git</small>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="glass slide-right">
            <h2>Contact</h2>
            <p>Email: jacksamsonc@gmail.com</p>
            <p>GitHub: github.com/jacksamson1503</p>
            <p>Location: Bangalore, India</p>
          </div>
        </section>

      </main>
    </div>
  );
}
