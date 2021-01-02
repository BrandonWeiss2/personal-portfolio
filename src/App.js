
import React, { Component } from 'react';
import Icon from './static/images/Icon.png';
import Headshot from './static/images/headshot.jpg'
import TaxHub from './static/images/tax-hub.jpg';
import OtakuRisuto from './static/images/OtakuRisuto.png'
import SpacedRepetition from './static/images/spaced-repetition.png'
import LinkedinCircle from './static/images/linkedin-circle.png'
import MailCircle from './static/images/mail-circle.png'
import PhoneCircle from './static/images/phone-circle.png'
import GithubCircle from './static/images/github-circle.png'
import Resume from './BrandonWeissResume.pdf'
// import CincinnatiSkyline from './cincinnati-skyline.jpg'
import CincinnatiMuseum from './static/images/cincinnati-museum.jpg'
import UniversityCincinnati from './static/images/university-cincinnati.jpg'
import WashingtonPark from './static/images/washington-park.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './App-Desktop.css';
import './App-Mobile.css';


export default class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    let acc = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active-accorion");
    
        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    const menu = document.getElementById('nav-links');

    window.addEventListener('resize', function() {
      if (window.innerWidth >= 870) {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    let acc = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < acc.length; i++) {
      acc[i].removeEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active-accorion");
    
        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }
  
  handleHamburger = (menu, navbar) => {
    
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
    navbar.classList.toggle('active');
  };

  handleScroll = () => {
    const sectionAbout = document.getElementById('section-about');
    const sectionProjects = document.getElementById('section-projects');
    const sectionExperience = document.getElementById('section-experience');
    const sectionContact = document.getElementById('section-contact');

    document.querySelector('#nav-about').className = ''
    document.querySelector('#nav-projects').className = ''
    document.querySelector('#nav-experience').className = ''
    document.querySelector('#nav-contact').className = ''
    
    if(window.scrollY > 20) {
      document.querySelector('#top-nav').className = 'top-nav scrolled'
      if(this.isElementInViewport(sectionAbout)) {
        document.querySelector('#nav-about').className = 'active'
      } else if (this.isAnyPartOfElementInViewPort(sectionProjects) ) {
        document.querySelector('#nav-projects').className = 'active'
      } else if (this.isAnyPartOfElementInViewPort(sectionExperience)) {
        document.querySelector('#nav-experience').className = 'active'
      } else if (this.isAnyPartOfElementInViewPort(sectionContact)) {
        document.querySelector('#nav-contact').className = 'active'
      }
      
    } 
    else {
      document.querySelector('.top-nav').className = 'top-nav'
    }
  }

  handleScrollToDiv = id => {
    console.log('jump', id)
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: 'smooth' });
  };

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top + 505 <= windowHeight && rect.top + rect.height >= 80;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return (
      vertInView && horInView
    )
  }

  isAnyPartOfElementInViewPort(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top - 80 <= windowHeight && rect.top + rect.height >= 80;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return (
      vertInView && horInView
    )
  }

  render() {
    return (
      <>
        <div className='top-nav' id='top-nav'>
          <div className='nav-icon'>
            <img className='icon' src={Icon} alt='Brandon Weiss Icon'></img>
          </div>
          <div className='nav-links' id='nav-links'>
            <button id='nav-about' onClick={() => this.handleScrollToDiv('jump-about')}>ABOUT<hr></hr></button>
            <button id='nav-projects' onClick={() => this.handleScrollToDiv('jump-projects')}>PROJECTS<hr></hr></button>
            <button id='nav-experience' onClick={() => this.handleScrollToDiv('jump-experience')}>EXPERIENCE<hr></hr></button>
            <button id='nav-contact' onClick={() => this.handleScrollToDiv('jump-contact')}>CONTACT<hr></hr></button>
          </div>
          <button className='burger-icon-a' onClick={() => this.handleHamburger(document.getElementById('nav-links'), document.getElementById('top-nav'))}>
            <FontAwesomeIcon icon={faBars} className='burger-icon'/>
          </button>
        </div>
        <div className='bgimg' id='bgimg-main'>
          <div className='caption'>
            <p className='border'>BRANDON WEISS</p>
          </div>
        </div>
        <div id='section-about'>
          <a id='jump-about'></a>
          <div id='about'>
            <h3>ABOUT ME</h3>
            <p><strong>Hi, I'm Brandon Weiss!</strong> Ever since taking a C++ class during my Junior year I have been yearning to get learn more about software engineering. After graduation, I got my Certified Public Accountant License and worked for Grant Thornton in their State and Local Tax department for the next two and half years. I ended up building many custom excel solutions to automate our data proccessing needs, which only increased the my desire to pursue a career in coding. I decided to enroll fulltime in Thinkful's Engineering Immersion program in August and am now ready to pursue my first position as a full-stack developer.</p>
            <p>Here's a few technologies I've been working with recently:</p>
            <div id='technologies'>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
              </ul>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          <img id='headshot' src={Headshot} alt='Brandon Weiss headshot'></img>
        </div>
        <div className='bgimg' id='bgimg-projects' style={{backgroundImage: `url(${CincinnatiMuseum})`}}>
          <div className='caption'>
            <span className='border'>PROJECTS</span>
          </div>
        </div>
        <div id='section-projects'>
          <a id='jump-projects'></a>
          <div id='projects-container'>
            <div id='project-tax-hub'>
              <div className='project-content'>
                <h3>TaxHub</h3>
                  <p>TaxHub helps tax professionals organize, manage, and track the progress of all the engagements and tax filings they are responsible for.</p>
                  <h4><strong>Technologies:</strong></h4>
                  <div id='technologies'>
                    <ul className='project-ul'>
                      <li>JavaScript (ES6+)</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>React</li>
                      <li>Material UI</li>
                    </ul>
                    <ul className='project-ul'>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>PostgreSQL</li>
                      <li>Authentication via JWT</li>
                      <li>RESTful Api</li>
                    </ul>
                </div>
                <div className='project-button-container'>
                  <a href='https://github.com/BrandonWeiss2/TaxHub_2.0_client' className='visit-link' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href='https://tax-hub-2-0-client.vercel.app/' className='visit-link' target='_blank' rel='noreferrer'>Live Link</a>
                </div>
              </div>
              <div className='img-wrapper'>
                <img id='tax-hub-img' src={TaxHub} alt='taxhub screenshot'></img>
              </div>
            </div>
            <hr></hr>
            <div id='project-otaku-risuto'>
              <div className='project-content'>
                <h3>OtakuRisuto</h3>
                  <p>OtakuRisuto users can track all the anime that have put on the backlog, discover new anime, and help them decided what to watch next.</p>
                  <h4><strong>Technologies:</strong></h4>
                  <div id='technologies'>
                    <ul>
                      <li>JavaScript (ES6+)</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>React</li>
                      <li>RESTful Api</li>
                    </ul>
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>PostgreSQL</li>
                      <li>Authentication via JWT</li>
                    </ul>
                </div>
                <div className='project-button-container'>
                  <a href='https://github.com/Cap3-Nate-Chad-Brandon-Michael-Josh/OtakuRisuto' className='visit-link' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href='https://otaku-risuto.vercel.app/' className='visit-link' target='_blank' rel='noreferrer'>Live Link</a>
                </div>
              </div>
              <div className='img-wrapper'>
                <img id='otaku-risuto-img' src={OtakuRisuto} alt='otaku risuto screenshot'></img>
              </div>
            </div>
            <hr></hr>
            <div id='project-spaced-repetition'>
              <div className='project-content'>
                <h3>Spaced Repetition</h3>
                  <p>Spaced Repetition is a language learning app that utilizes the spaced repetition learning algorithm to help our users learn.</p>
                  <h4><strong>Technologies:</strong></h4>
                  <div id='technologies'>
                    <ul>
                      <li>JavaScript (ES6+)</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>React</li>
                      <li>RESTful Api</li>
                    </ul>
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>PostgreSQL</li>
                      <li>Authentication via JWT</li>
                    </ul>
                </div>
                <div className='project-button-container'>
                  <a href='https://github.com/BrandonWeiss2/spaced-repetition-frontend' className='visit-link' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href='https://spaced-repetition-frontend.vercel.app/register' className='visit-link' target='_blank' rel='noreferrer'>Live Link</a>
                </div>
              </div>
              <div className='img-wrapper'>
                <img id='spaced-repetition-img' src={SpacedRepetition} alt='spaced repetition screenshot'></img>
              </div>
            </div>
          </div>
        </div>
        <div className='bgimg' id='bgimg-experience' style={{backgroundImage: `url(${UniversityCincinnati})`}}>
          <div className='caption'>
            <span className='border'>EXPERIENCE</span>
          </div>
        </div>
        <div id='section-experience'>
          <a id='jump-experience'></a>
          <div className='education-container'>
            <div className='download'>
              <a href={Resume} download='BrandonWeissResume' className='download-link' target='_blank' rel="noreferrer">Download Resume</a>
            </div>
            <button className='accordion'>
              <span>Education</span>
            </button>
            <div className='panel'>
              <div id='education1'>
                <div className='education-header'>
                  <h3><span>2020-12</span><span>Thinkful - Engineering Immersion</span></h3>
                  <h4>Software Engineering</h4>
                  <p>Thinkful's Engineering Immersion program is a 5-month full-time software engineering course. JavaScript-oriented curriculum includes Node.js, Express, PostgreSQL, React, advanced HTML & CSS, and CS fundamentals.</p>
                </div>
              </div>
              <hr></hr>
              <div id='education2'>
                <div className='education-header'>
                  <h3><span>2019-12 </span><span>Certified Public Accountant License (CPA)</span></h3>
                  <h4>Accountancy Board of Ohio</h4>
                  <p>A CPA license is the accounting profession’s highest standard of competence, a symbol of achievement and assurance of quality.</p>
                </div>
              </div>
              <hr></hr>
              <div id='education3'>
                <div className='education-header'>
                  <h3><span>2017-08 </span><span>University of Cincinnati</span></h3>
                  <h4>BBA: Accounting - 3.7 GPA</h4>
                  <p>he accounting program at the UC Carl H. Lindner College of Business (Lindner) is designed to prepare students for careers in public and corporate accounting through a rigorous course of study. This includes general education requirements, as well as basic courses in all business disciplines, accounting and career exploration and development.</p>
                </div>
              </div>
            </div>
            <button className='accordion'>
              <span>Experience</span>
            </button>
            <div className='panel'>
              <div id='experience1'>
                <div className='experience-header'>
                  <h3><span>2017-10 – 2020-05</span><span>Grant Thornton LLP</span></h3>
                  <h4>Senior Tax Associate</h4>
                  <ul>
                    <li>Mentored and developed our new associates by providing personal guidance and detailed review of their work</li>
                    <li>Managed a portfolio of ten clients and was responsible for the 200+ annual tax filings which generated $1.2M in annual revenue</li>
                    <li>Anticipated our clients' needs by providing regular communications and tax related insights regarding laws and regulations</li>
                    <li>Mastered complicated taxation software and was able to appropriately apply complicated tax legislation</li>
                  </ul>
                </div>
              </div>
              <hr></hr>
              <div id='experience2'>
                <div className='experience-header'>
                  <h3><span>2016-10 – 2016-12</span><span>Tesla, Inc.</span></h3>
                  <h4>Accounting Intern</h4>
                  <ul>
                    <li>Applied proper codes to invoices, files, and receipts to keep records organized and easily searchable</li>
                    <li>Assisted the Fixed Asset's Manager with month-end closing and reporting duties</li>
                    <li>Accurately entered over 200 purchase orders into the fixed assets ledger</li>
                  </ul>
                </div>
              </div>
              <hr></hr>
              <div id='experience3'>
                <div className='experience-header'>
                  <h3><span>2015-06 – 2015-08</span><span>Tesla, Inc.</span></h3>
                  <h4>Delivery Orientation Specialist</h4>
                  <ul>
                    <li>Tailored each delivery orientations to match the customers' level of technical competence</li>
                    <li>Actively maintained customer relations to provide the highest level of service and directly addressed any issues and concerns the customer had with their vehicle</li>
                    <li>Collaborated with sales team to identify additional selling opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bgimg' id='bgimg-contact' style={{backgroundImage: `url(${WashingtonPark})`}}>
          <div className='caption'>
            <span className='border'>CONTACT</span>
          </div>
        </div>
        <div id='section-contact'>
          <a id='jump-contact'></a>
          <div className='contact-container'>
            <h3>BRANDON WEISS</h3>
            <h4>Software Engineer</h4>
            <p>If you want to collaborate on any web or mobile applications, please feel free to reach out.</p>
            <p>I'm available for freelance projects and full-time employment.</p>
            <div className='contact-icon-container'>
              <a href='https://www.linkedin.com/in/brandon-weiss-cpa-7450022b/' target='_blank' rel='noreferrer'><img src={LinkedinCircle} alt='linkedin Icon'></img></a>
              <a href='mailto:brandonweiss2008@gmail.com'><img src={MailCircle} alt='mail Icon'></img></a>
              <a href='tel:513-307-2009'><img src={PhoneCircle} alt='phone Icon'></img></a>
              <a href='https://github.com/BrandonWeiss2' target='_blank' rel='noreferrer'><img src={GithubCircle} alt='github Icon'></img></a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
