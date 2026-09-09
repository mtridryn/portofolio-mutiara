import React, { useEffect, useState } from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMessageCircle,
  FiBriefcase,
  FiCode,
  FiCalendar,
  FiExternalLink,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import './index.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const docImages = [
    'doc.1.jpeg',
    'doc.2.jpeg',
    'doc.3.jpeg',
    'doc.4.JPG',
    'doc.mapres.jpeg',
    'doc.7.JPG'
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">Mutiara.</div>
        
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#education" className="nav-link" onClick={closeMenu}>Education</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#documentation" className="nav-link" onClick={closeMenu}>Documentation</a>
          <a href="#awards" className="nav-link" onClick={closeMenu}>Awards</a>
        </div>
      </nav>
      
      <div className="container">
        {/* Hero Section */}
        <section id="about" className="hero">
          <div className="hero-content">
            <div className="hero-text animate-on-scroll">
              <span className="hero-greeting">Welcome to my space</span>
              <h1 className="hero-name">Ni Gusti Ayu <br/><span>Mutiara</span> Indriyani.</h1>
              <h2 className="hero-role">Driving product success with logic & vision.</h2>
              <p className="hero-desc">
                Informatics student (GPA 4.00) applying for a Fullstack role. 
                Experienced in building complex digital applications, such as employee career monitoring systems. 
                I bridge technical constraints with business goals to build scalable, secure, and user-centric solutions.
              </p>
              
              <div className="hero-actions">
                <a href="https://wa.me/6285176702544" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <FiMessageCircle size={18} /> WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/mutiaraindriyanii/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/mtridryn" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FiGithub size={18} /> GitHub
                </a>
              </div>
            </div>
            
            <div className="hero-image-container animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="hero-image-backdrop"></div>
              <div className="hero-image-wrapper">
                <img src="/galeri/PROFILE.JPG" alt="Mutiara" />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="section-title animate-on-scroll">Education & Certifications</h2>
          
          <div className="timeline">
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Undergraduate Informatics <span>@ Gunadarma University</span></h3>
                  <div className="timeline-subtitle"><FiCalendar size={14}/> Sep 2022 - Aug 2026</div>
                </div>
                <div className="timeline-content">
                  <ul>
                    <li>Current GPA: 4.00/4.00 (155 credits).</li>
                    <li>Selected as an Outstanding Student (MAPRES) until 8th semester.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Full Stack Developer Cohort <span>@ Coding Camp powered by DBS Foundation</span></h3>
                  <div className="timeline-subtitle"><FiCalendar size={14}/> Feb 2025 - Jul 2025 (Studi Independen)</div>
                </div>
                <div className="timeline-content">
                  <ul>
                    <li>Responsible for implementing key features of the web application, including AI model integration.</li>
                    <li>Achieved a final score of 94/100 and was awarded 'Best Presenter' for technical communication skills.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey Section */}
        <section id="experience">
          <h2 className="section-title animate-on-scroll">Career & Experience</h2>
          
          <div className="timeline">
            {/* 1. Indi */}
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Full Stack Developer Intern <span>@ PT Indi Teknokreasi Internasional</span></h3>
                  <div className="timeline-subtitle"><FiCalendar size={14}/> Aug 2025 – Dec 2025</div>
                </div>
                <div className="timeline-content">
                  <ul>
                    <li>Engineered over 50 scalable RESTful APIs using Golang and Echo Framework for the complex "Merit System" (Employee Career Services).</li>
                    <li>Designed and optimized database architecture (ERD) to support complex assessment data flows.</li>
                    <li>Served as a Tribe Leader, successfully directing and mentoring a cross-functional team of over 25 interns to deliver high-impact technical initiatives.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Lab */}
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Informatics Lab Assistant <span>@ Gunadarma Informatics Laboratory</span></h3>
                  <div className="timeline-subtitle"><FiCalendar size={14}/> Aug 2024 – Sept 2026</div>
                </div>
                <div className="timeline-content">
                  <ul>
                    <li>Delivered lectures and facilitated practicum sessions for Algorithms, Database, Computer Graphics, and Golang.</li>
                    <li>Managed laboratory software infrastructure and contributed to practicum module development.</li>
                    <li>Provided real-time technical support to 36 students per class.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Product */}
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Product Management Supervisor <span>@ Google Developer Group UG</span></h3>
                  <div className="timeline-subtitle"><FiCalendar size={14}/> Oct 2025 - Aug 2026</div>
                </div>
                <div className="timeline-content">
                  <ul>
                    <li>Curated comprehensive curriculum for Product Management Weekly Classes and Tech Talks.</li>
                    <li>Facilitated knowledge-sharing events and led the analysis of educational topics.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. CEO */}
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">Chief Executive Officer & Founder <span>@ Recad Marketplace</span></h3>
                  <div className="timeline-subtitle"><FiCalendar size={14}/> Feb 2024 – Feb 2025</div>
                </div>
                <div className="timeline-content">
                  <ul>
                    <li>Architected backend infrastructure and database schema, integrating a third-party payment gateway.</li>
                    <li>Led the product lifecycle from strategic vision to execution, establishing SOPs and translating Figma designs.</li>
                    <li>Managed cross-functional resources and drove business growth through strategic partnerships.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title animate-on-scroll">Featured Works</h2>
          
          <div className="projects-grid">
            
            <div className="project-card animate-on-scroll">
              <div className="project-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/galeri/project ubud activtiy.png" alt="Ubud Activity" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Ubud Activity Bali Company Profile</h3>
                <div className="project-subtitle"><FiCode size={14}/> Jan 2025 - Sep 2025</div>
                <ul>
                  <li>Analyzed company requirements and created website and database architecture.</li>
                  <li>Developed RESTful API with Vite.js, Express.js, and PostgreSQL.</li>
                  <li>Integrated Gemini API model for chatbot as an information service using JavaScript.</li>
                </ul>
              </div>
            </div>

            <div className="project-card animate-on-scroll">
              <div className="project-image-placeholder" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                <img 
                  src="/galeri/chatbot.png" 
                  alt="Chatbot RAG" 
                  style={{ objectFit: 'contain', padding: '1.5rem', width: '100%', height: '100%' }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Chatbot RAG</h3>
                <div className="project-subtitle"><FiCode size={14}/> JavaScript</div>
                <ul>
                  <li>Developed a Retrieval-Augmented Generation (RAG) based chatbot.</li>
                  <li>Conducted an in-depth comparison of RAG implementation methods to optimize response accuracy in a training project environment.</li>
                </ul>
              </div>
            </div>

            <div className="project-card animate-on-scroll">
              <div className="project-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="/galeri/dermalyze.png" alt="Dermalyze Analysis" />
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  <a href="https://dermalyzeanalysis.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Dermalyze Analysis <FiExternalLink size={16} color="var(--accent-blue)" />
                  </a>
                </h3>
                <div className="project-subtitle"><FiCode size={14}/> Apr 2025 – May 2025</div>
                <ul>
                  <li>Directed the project planning cycle and system architecture design.</li>
                  <li>Developed the backend using Express.js and PocketBase.</li>
                  <li>Integrated a CNN-based AI model via a Flask microservice for skin analysis.</li>
                </ul>
              </div>
            </div>

            <div className="project-card animate-on-scroll">
              <div className="project-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Muti's Story Website" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Muti’s Story Website</h3>
                <div className="project-subtitle"><FiCode size={14}/> Mar 2025 – Apr 2025</div>
                <ul>
                  <li>Implemented PWA functionalities utilizing Service Workers and Webpack for offline caching.</li>
                  <li>Developed an interactive map feature using Leaflet.js consuming data from Dicoding Story API.</li>
                  <li>Established token-based user authentication and deployed to Netlify.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title animate-on-scroll">Skills & Expertise</h2>
          
          <div className="skills-category animate-on-scroll">
            <h3 className="skills-subtitle">Programming Languages</h3>
            <div className="skills-wrapper">
              <span className="skill-badge">Golang</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">Java</span>
              <span className="skill-badge">C/C++</span>
              <span className="skill-badge">Python</span>
            </div>
          </div>

          <div className="skills-category animate-on-scroll" style={{ marginTop: '2rem' }}>
            <h3 className="skills-subtitle">Languages</h3>
            <div className="skills-wrapper">
              <span className="skill-badge">Indonesian</span>
              <span className="skill-badge">English</span>
              <span className="skill-badge">Korean</span>
            </div>
          </div>

          <div className="skills-category animate-on-scroll" style={{ marginTop: '2rem' }}>
            <h3 className="skills-subtitle">Tools & Software</h3>
            <div className="skills-wrapper">
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Git & GitHub</span>
              <span className="skill-badge">Figma</span>
              <span className="skill-badge">Netbeans</span>
              <span className="skill-badge">Canva</span>
              <span className="skill-badge">Trello</span>
              <span className="skill-badge">VS Code</span>
              <span className="skill-badge">Unity & Blender</span>
            </div>
          </div>

          <div className="skills-category animate-on-scroll" style={{ marginTop: '2rem' }}>
            <h3 className="skills-subtitle">Core Competencies</h3>
            <div className="skills-wrapper">
              <span className="skill-badge">Project Management</span>
              <span className="skill-badge">Adaptable</span>
              <span className="skill-badge">User Experience (UX)</span>
              <span className="skill-badge">Market Research</span>
              <span className="skill-badge">Leadership</span>
              <span className="skill-badge">Problem Solving</span>
              <span className="skill-badge">Public Speaking</span>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="documentation">
          <h2 className="section-title animate-on-scroll">Documentation</h2>
          <p className="doc-desc animate-on-scroll">A glimpse into my professional journey, speaking engagements, and collaborative moments.</p>
          
          <div className="doc-grid">
            {docImages.map((imgName, index) => (
              <div key={index} className="doc-card animate-on-scroll">
                <div className="doc-image-placeholder" style={{ padding: 0, position: 'relative' }}>
                  <img src={`/galeri/${imgName}`} alt={`Moment ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards">
          <h2 className="section-title animate-on-scroll">Milestones & Achievements</h2>
          
          <div className="awards-grid">
            <div className="award-card animate-on-scroll">
              <div className="award-icon"><FaTrophy size={18} /></div>
              <div className="award-text">Silver Medal Business National Competition at NEIRA 3 (2026)</div>
            </div>
            <div className="award-card animate-on-scroll">
              <div className="award-icon"><FaTrophy size={18} /></div>
              <div className="award-text">Winner of MAPRES Gunadarma University (2025)</div>
            </div>
            <div className="award-card animate-on-scroll">
              <div className="award-icon"><FaTrophy size={18} /></div>
              <div className="award-text">Top 12 Finalist Gunadarma Business Idea Competition (2025)</div>
            </div>
            <div className="award-card animate-on-scroll">
              <div className="award-icon"><FaTrophy size={18} /></div>
              <div className="award-text">Best SDG Alignment Award at International Business Pitch Fest (2025)</div>
            </div>
            <div className="award-card animate-on-scroll">
              <div className="award-icon"><FaTrophy size={18} /></div>
              <div className="award-text">Awardee of P2MW (Entrepreneurial Student Development Program) (2024)</div>
            </div>
          </div>
        </section>

        <footer>
          <p>Designed & Built by Ni Gusti Ayu Mutiara Indriyani</p>
        </footer>
      </div>
    </>
  );
}

export default App;
