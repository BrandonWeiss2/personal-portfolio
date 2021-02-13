import React, { Component } from 'react';
import Headshot from './static/images/headshot.jpg'
import TaxHub from './static/images/tax-hub.jpg';
import OtakuRisuto from './static/images/OtakuRisuto.jpg'
import SpacedRepetition from './static/images/spaced-repetition.png'
import LinkedinCircle from './static/images/linkedin-circle.png'
import MailCircle from './static/images/mail-circle.png'
import PhoneCircle from './static/images/phone-circle.png'
import GithubCircle from './static/images/github-circle.png'
import Resume from './BrandonWeissResume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './App-Desktop.css';
import './App-Mobile.css';


export default class App extends Component {
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

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

    document.querySelector('#nav-about').className = ''
    document.querySelector('#nav-projects').className = ''
  }

  handleScrollToDiv = id => {
    console.log('jump', id)
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: 'smooth' });
  };

  openResume() {
    window.open(Resume);
  }

  render() {

    //Functions to opperate slideshow
    let slideIndex = 1

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < dots.length; i++) {
        slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
      }
      console.log('dots', dots[slideIndex-1])
      if(slides[slideIndex-1] !== undefined) {
        slides[slideIndex-1].style.display = 'block';
      }
      if(dots[slideIndex-1] !== undefined) {
        dots[slideIndex-1].classList.add('active'); 
      }
    }
    return (
      <>
        <div className='top-nav' id='top-nav'>
          <div className='top-nav-wrapper'>
            <div className='nav-name'>
              <h1>Brandon Weiss</h1>
            </div>
            <div className='nav-links' id='nav-links'>
              <button id='nav-about' onClick={() => this.handleScrollToDiv('jump-about')}>ABOUT</button>
              <button id='nav-projects' onClick={() => this.handleScrollToDiv('jump-projects')}>PROJECTS</button>
              <button id='nav-experience' onClick={() => this.openResume()}>RESUME</button>
            </div>
            <button className='burger-icon-a' onClick={() => this.handleHamburger(document.getElementById('nav-links'), document.getElementById('top-nav'))}>
              <FontAwesomeIcon icon={faBars} className='burger-icon'/>
            </button>
          </div>
        </div>
        <main>
          <div id='section-about'>
            <a id='jump-about'></a>
            <img id='headshot' src={Headshot} alt='Brandon Weiss headshot'></img>
            <div className='contact-icon-container'>
              <a href='https://www.linkedin.com/in/brandon-weiss-cpa-7450022b/' target='_blank' rel='noreferrer'><img src={LinkedinCircle} alt='linkedin Icon' style={{marginLeft: '5px'}}></img></a>
              <a href='mailto:brandonweiss2008@gmail.com'><img src={MailCircle} alt='mail Icon'></img></a>
              <a href='tel:513-307-2009'><img src={PhoneCircle} alt='phone Icon'></img></a>
              <a href='https://github.com/BrandonWeiss2' target='_blank' rel='noreferrer'><img src={GithubCircle} alt='github Icon'></img></a>
            </div>
            <div id='about'>
              <h2><strong>I'm Brandon, software engineer and web developer </strong> </h2>
              <p>Ever since taking a C++ class during my Junior year I have been yearning to learn more about software engineering. After graduation, I got my Certified Public Accountant License and worked for Grant Thornton in their State and Local Tax department for the next two and half years. I ended up building many custom excel solutions to automate our data processing needs, which only increased my desire to pursue a career in coding. I decided to enroll fulltime in Thinkful's Engineering Immersion program in August and am now ready to pursue my first position as a full-stack developer.</p>
              <p>Some things that get me up in the morning: hot yoga classes to stay healthy, paintball for the adrenallin rush, and 90's & 00's rock music to unwind.</p>
              <p>Here are a few technologies I've been working with recently:</p>
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
          </div>
          <div id='section-projects'>
            <a id='jump-projects'></a>
            <h2 className='projects-header'>PROJECTS</h2>
            <div className="slideshow-container">
              <div className="mySlides fade" style={{display:'block'}}>
                <div className="slide-wrapper">
                  <img src={TaxHub} alt='taxhub screenshot'style={{width:'45%'}}></img>
                  <div className='project-content'>
                    <h3>TaxHub</h3>
                    <p>TaxHub helps tax professionals organize, manage, and track the progress of all the engagements and tax filings they are responsible for.</p>
                    <h4><strong>Technologies:</strong></h4>
                    <div id='technologies' className='project-technologies'>
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
                </div>
              </div>
              <div className="mySlides fade">
                <div className="slide-wrapper">
                  <img src={OtakuRisuto} alt='otaku risuto screenshot'style={{width:'45%'}}></img>
                  <div className='project-content'>
                    <h3>OtakuRisuto</h3>
                    <p>OtakuRisuto users can track all the anime that have put on the backlog, discover new anime, and help them decided what to watch next.</p>
                    <h4><strong>Technologies:</strong></h4>
                    <div id='technologies' className='project-technologies'>
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
                </div>
              </div>
              <div className="mySlides fade">
                <div className="slide-wrapper">
                  <img src={SpacedRepetition} alt='spaced repetition screenshot'style={{width:'45%'}}></img>
                  <div className='project-content'>
                    <h3>Spaced Repetition</h3>
                    <p>Spaced Repetition is a language learning app that utilizes the spaced repetition learning algorithm to help our users learn.</p>
                    <h4><strong>Technologies:</strong></h4>
                    <div id='technologies' className='project-technologies'>
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
                </div>
              </div>
              <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
              <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <br></br>
            <div>
              <span className="dot active" onClick={() => currentSlide(1)}></span>
              <span className="dot" onClick={() => currentSlide(2)}></span>
              <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
          </div>
        </main>
      </>
    );
  }
}
