import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>AP</div>
          <div>
            <h2>Alumni Portal</h2>
            <span>Connecting Generations</span>
          </div>
        </div>

        <nav className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#modules">Modules</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.navButtons}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.registerBtn}>Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <span className={styles.badge}>ALUMNI COMMUNITY</span>

          <h1>
            Stay Connected.
            <br />
            <span>Stay Involved.</span>
          </h1>

          <p>
            A digital platform that brings alumni, students, faculty, and
            institutions together to build meaningful connections and create
            opportunities.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>
              Join Alumni Network →
            </button>

            <button className={styles.secondaryBtn}>
              Explore Portal
            </button>
          </div>

          <div className={styles.stats}>
            <div>
              <strong>10K+</strong>
              <span>Alumni</span>
            </div>

            <div>
              <strong>25+</strong>
              <span>Countries</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Events</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.circleOuter}>
            <div className={styles.circleMiddle}>
              <div className={styles.circleInner}>
                <span>🎓</span>
                <p>One Community</p>
              </div>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardOne}`}>
            <span>👥</span>
            <div>
              <strong>Connect</strong>
              <small>With Alumni</small>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardTwo}`}>
            <span>💼</span>
            <div>
              <strong>Opportunities</strong>
              <small>Jobs & Careers</small>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardThree}`}>
            <span>📅</span>
            <div>
              <strong>Events</strong>
              <small>Stay Updated</small>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className={styles.modulesSection} id="modules">
        <div className={styles.sectionHeading}>
          <span>PORTAL MODULES</span>
          <h2>Everything in One Place</h2>
          <p>
            Explore the features designed to keep our alumni community
            connected and engaged.
          </p>
        </div>

        <div className={styles.moduleGrid}>
          <ModuleCard
            icon="👤"
            title="Alumni Directory"
            description="Find and connect with alumni across different batches, departments, and locations."
          />

          <ModuleCard
            icon="📅"
            title="Events & Reunions"
            description="Discover upcoming events, reunions, webinars, and alumni meetups."
          />

          <ModuleCard
            icon="💼"
            title="Career Opportunities"
            description="Explore job openings, career opportunities, and professional connections."
          />

          <ModuleCard
            icon="🎓"
            title="Mentorship"
            description="Connect students and young graduates with experienced alumni mentors."
          />

          <ModuleCard
            icon="📰"
            title="News & Updates"
            description="Stay informed about institutional news, achievements, and alumni stories."
          />

          <ModuleCard
            icon="🤝"
            title="Community"
            description="Build meaningful relationships and participate in the alumni community."
          />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} id="about">
        <div>
          <span>BE PART OF THE COMMUNITY</span>
          <h2>Your Journey Doesn't End at Graduation.</h2>
          <p>
            Continue your connection with your institution and fellow alumni.
            Together, we can create a stronger community.
          </p>
        </div>

        <button className={styles.ctaButton}>Become a Member →</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
        <div>
          <h3>Alumni Portal</h3>
          <p>Connecting generations, creating opportunities.</p>
        </div>

        <div className={styles.footerLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#modules">Modules</a>
          <a href="#contact">Contact</a>
        </div>

        <p className={styles.copyright}>
          © 2026 Alumni Portal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const ModuleCard = ({ icon, title, description }) => {
  return (
    <div className={styles.moduleCard}>
      <div className={styles.moduleIcon}>{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button className={styles.arrowButton}>→</button>
    </div>
  );
};

export default LandingPage;