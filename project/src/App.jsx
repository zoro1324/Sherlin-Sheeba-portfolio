import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaTwitter, FaBalanceScale, FaGavel, FaFileContract, FaHandshake, FaMapMarkerAlt, FaPhone, FaGraduationCap, FaUserTie, FaSearch, FaFileWord, FaBuilding, FaComments, FaUsers, FaLightbulb, FaCut, FaSpa, FaAngleRight } from 'react-icons/fa';
import { MdGavel, MdBusiness, MdSchool, MdAssignment } from 'react-icons/md';
import { BsChatLeftTextFill } from 'react-icons/bs';
import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading time
  }, []);

  const handleNavClick = (section) => {
    setActiveLink(section);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="shapes-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <h2>Preparing Your Legal Profile...</h2>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar expand="lg" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Samidurai Office</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['home', 'about', 'education', 'experience', 'skills', 'interests', 'contact'].map((section) => (
                <Nav.Link 
                  key={section}
                  href={`#${section}`}
                  className={activeLink === section ? 'active' : ''}
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start hero-content">
              <h1>Upholding the Law, Protecting Your Rights</h1>
              <p className="lead">
                A dedicated legal professional committed to providing comprehensive legal counsel and robust representation with a focus on client-centered solutions.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com/in/s-sherlin-sheeba" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/sherlin_sheeba" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="mailto:Sherlinsheeba80@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
              <Button variant="primary" size="lg" href="#contact">
                Schedule a Consultation
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <div className="hero-image-container">
                <img src="/src/assets/sherlin_sheeba_profile.jpg" alt="S. Sherlin Sheeba" className="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="section-padding">
        <Container>
          <div className="section-title">
            <h2>About S. Sherlin Sheeba</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="about-content">
                <p className="lead main-text">
                  As a legal advocate, my passion is rooted in the pursuit of justice and the protection of my clients' rights. With a client-first approach, I am dedicated to providing clear, effective legal guidance and tenacious representation. I believe that every case is unique and requires a tailored strategy built on meticulous research and a deep understanding of the law.
                </p>
                
                <Row className="mt-5">
                  <Col md={4} className="mb-4">
                    <div className="about-card">
                      <div className="about-icon law">
                        <FaHandshake />
                      </div>
                      <h3>Family Law</h3>
                      <p>Providing compassionate legal support for matters including divorce, child custody, and domestic disputes.</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="about-card">
                      <div className="about-icon corporate">
                        <FaBuilding />
                      </div>
                      <h3>Property Disputes</h3>
                      <p>Handling complex property and real estate cases, ensuring your assets and rights are legally protected.</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="about-card">
                      <div className="about-icon family">
                        <MdGavel />
                      </div>
                      <h3>Civil Litigation</h3>
                      <p>Representing clients in a wide range of civil disputes, from contract disagreements to personal injury claims.</p>
                    </div>
                  </Col>
                </Row>
                <div className="education-highlight">
                  <MdSchool className="education-icon" />
                  <p>Admitted as an Advocate in the Madurai Bar Association.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="education" className="section-padding dark-section">
        <Container>
          <div className="section-title">
            <h2>Legal Education</h2>
          </div>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="timeline">
                <div className={`timeline-item left`}>
                  <div className="timeline-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">2014-2017</div>
                    <h3>MBA, LLB</h3>
                    <p className="institution">Andhra University</p>
                    <p>Earned a dual degree in Business Administration and Law, providing a unique perspective on legal issues from both a business and statutory standpoint.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="experience" className="section-padding experience-section">
        <Container>
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>
          <Row>
            <Col lg={6} className="mb-4">
              <div className="experience-card">
                <div className="experience-icon">
                  <FaUserTie />
                </div>
                <div className="experience-content">
                  <h3>Junior Associate</h3>
                  <div className="experience-meta">
                    <span className="duration">2017 - Present</span>
                    <span className="organization">Sammidurai Office</span>
                  </div>
                  <p style={{ color: '#e6cece' }}>Assisted senior counsel in a variety of civil, family, and property cases. Responsible for legal research, drafting pleadings, and preparing case briefs for trial.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="section-padding skills-section">
        <Container>
          <div className="section-title">
            <h2>Skills & Expertise</h2>
          </div>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Core Legal Competencies</h3>
              <div className="skills-grid">
                {[
                  { name: "Legal Research", icon: <FaSearch /> },
                  { name: "Pleading & Drafting", icon: <FaFileWord /> },
                  { name: "Trial Advocacy", icon: <MdGavel /> },
                  { name: "Negotiation", icon: <FaHandshake /> },
                  { name: "Client Counseling", icon: <BsChatLeftTextFill /> },
                  { name: "Case Management", icon: <MdAssignment /> }
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="skills-grid">
                {[
                  { name: "Communication", icon: <FaComments /> },
                  { name: "Problem-Solving", icon: <FaLightbulb /> },
                  { name: "Critical Thinking", icon: <FaBalanceScale /> }
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="interests" className="section-padding dark-section skills-section">
  <Container>
    <div className="section-title">
      <h2>Personal Interests & Skills</h2>
    </div>
    <div className="skills-container">
      <div className="skills-category">
        <h3>Hobbies & Certifications</h3>
        <div className="skills-grid">
          {[
            { name: "Certified Tailor & Dressmaker", icon: <FaCut />, description: "Proficient in tailoring and dressmaking, a skill that highlights precision, creativity, and a meticulous eye for detail." },
            { name: "Certified Beautician", icon: <FaSpa />, description: "Completed a comprehensive course in professional beauty and skincare, demonstrating a commitment to client satisfaction and attention to detail." }
          ].map((item, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{item.icon}</div>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
</section>




      <footer className="footer-section" id="contact">
        <div className="footer-shape"></div>
        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={4} md={6} className="footer-info">
                <h3>S. Sherlin Sheeba</h3>
                <p className="footer-about">
                  Providing expert legal counsel and representation with integrity.
                </p>
                <div className="footer-social">
                  <a href="https://linkedin.com/in/s-sherlin-sheeba" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/sherlin_sheeba" target="_blank" rel="noopener noreferrer" className="twitter">
                    <FaTwitter />
                  </a>
                  <a href="mailto:Sherlinsheeba80@gmail.com" className="email">
                    <FaEnvelope />
                  </a>
                </div>
              </Col>
              <Col lg={4} md={6} className="footer-links">
                <h4>Quick Links</h4>
                <div className="quick-links">
                  <p><FaAngleRight className="link-icon" /><a href="#home">Home</a></p>
                  <p><FaAngleRight className="link-icon" /><a href="#about">About</a></p>
                  <p><FaAngleRight className="link-icon" /><a href="#education">Education</a></p>
                  <p><FaAngleRight className="link-icon" /><a href="#experience">Experience</a></p>
                  <p><FaAngleRight className="link-icon" /><a href="#skills">Skills</a></p>
                  <p><FaAngleRight className="link-icon" /><a href="#interests">Interests</a></p>
                  <p><FaAngleRight className="link-icon" /><a href="#contact">Contact</a></p>
                </div>
              </Col>
              <Col lg={4} md={12} className="footer-contact">
                <h4>Contact Information</h4>
                <div className="contact-info">
                  <p>
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>No. 73, Law Chambers, High Court Building, Madurai Bench, Madurai - 625 023</span>
                  </p>
                  <p>
                    <FaPhone className="contact-icon" />
                    <span>9626762938</span>
                  </p>
                  <p>
                    <FaEnvelope className="contact-icon" />
                    <span>Sherlinsheeba80@gmail.com</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start">
                <p className="copyright">
                  © {new Date().getFullYear()} S. Sherlin Sheeba. All rights reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default App;