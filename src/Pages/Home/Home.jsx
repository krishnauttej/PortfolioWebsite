import React, { useState } from 'react'
import "./Home.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import AbtPic from './Images/KKU image.jpg'
import workpic1 from './Images/reactchatapp.png'
import workpic2 from './Images/excelexport.png'
import workpic3 from './Images/fakeorreal.png'
import workpic4 from './Images/quizapp.png'
import workpic5 from './Images/dataanalysis.png'
import workpic6 from './Images/portfoliowebsite.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faMicrochip, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import ContactSection from './ContactSection';

function Home() {

  // About section functionality

  const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDownloadResume = async () => {
      try {
          // Fetch the resume file from the public folder
          const response = await fetch('/Krishna_Uttej_Kondisetty_Resume.pdf');
          const blob = await response.blob();

          // Create a URL for the blob object
          const url = window.URL.createObjectURL(new Blob([blob]));

          // Create an anchor element with the URL and trigger download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Krishna_Uttej_Kondisetty_Resume.pdf');
          document.body.appendChild(link);
          link.click();

          // Cleanup
          link.parentNode.removeChild(link);
          window.URL.revokeObjectURL(url);
      } catch (error) {
          console.error('Error downloading resume:', error);
          toast.error('Error downloading resume')
      }
  };

  // View more functionality

  const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(true);
    };

    const handleHide = () => {
        setShowMore(false);
    };

  // Icon library

  library.add(faCode, faPenRuler, faMicrochip, faLink, faEnvelope, faInstagram, faLinkedin, faGithub, faXTwitter)


  return (
    <div>
        <div className='header-section' id='header'>
          <div className='container'>
            <Navbar/>
            <div className='header-text'>
              <p>Hello, I'm</p>
              <h1>Krishna Uttej Kondisetty</h1>
              <h2>Let's Innovate Together</h2>
              <a href="#contact" className="header-btn" aria-label='Get-started-button'>Connect</a> 
            </div>
          </div>
        </div>

        <div className='about-section' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='abt-col-1'>
                <img src={AbtPic} alt="Krishna-Uttej-Professional" />
              </div>
              <div className="abt-col-2">
                      <h1 className="sub-header">About Me</h1>
                      <p>I am an experienced Software Engineer with 3.5 years of Work experience as a Full Stack Developer, passionate about technology. 
                        Skilled in both Front End and Back End developments with proficiency in below technologies.
                      </p>

                      <div className="tabs">
                        <p className={`tab-links ${activeTab === 'skills' ? 'act-link' : ''}`} onClick={() => openTab('skills')}><strong>Skills</strong></p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'act-link' : ''}`} onClick={() => openTab('experience')}><strong>Experience</strong></p>
                        <p className={`tab-links ${activeTab === 'education' ? 'act-link' : ''}`} onClick={() => openTab('education')}><strong>Education</strong></p>
                      </div>

                      <div className={`tab-conts ${activeTab === 'skills' ? 'act-tab' : ''}`} id="skills">
                          <ul>
                              <li><span>Front-End</span><br/>React, Angular, Node, HTML, CSS, Bootstrap, JavaScript, TypeScript</li>
                              <li><span>Back-End</span><br/>Java, Spring, Spring Boot, REST API, Hibernate, Microservices, Express, Python, Django</li>
                              <li><span>Database</span><br/>PostgreSQl, MongoDB, MySQL, SQL Server</li>
                              <li><span>Technologies</span><br/>Data Science, Machine Learning, Hadoop, Spark, GCP, Azure, AWS<br/></li>
                              <li><span>Tools</span><br/>Jenkins, Docker, Kubernetes, Postman, GitLab, BitBucket, Azure DevOps, Jira, Postman</li>
                              <li><span>IDE</span><br/>Visual Studio Code, Eclipse, IntelliJ, STS, Google Colab, Pycharm, Azure Databricks</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'experience' ? 'act-tab' : ''}`} id="experience">
                          <ul>
                              <li><span>Jan. 2024 &nbsp;-&nbsp; Present</span><br/>Teaching Assistant at University Of Missouri Kansas City</li>
                              <li><span>Oct 2021  &nbsp;-&nbsp; July 2023</span><br/>Senior Software Engineer at Verizon</li>
                              <li><span>July 2020 &nbsp;-&nbsp; Oct 2021</span><br/>Software Engineer at Verizon</li>
                              <li><span>Dec 2019 &nbsp;-&nbsp; July 2020</span><br/>Software Developer Intern at Collins Aerospace</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'education' ? 'act-tab' : ''}`} id="education">
                          <ul>
                              <li><span>Aug 2023 - May 2025</span><br/>Masters in Computer Science (GPA- 3.9/4.0) | University Of Missouri Kansas City</li>
                              <li><span>Aug 2016 - May 2020</span><br/>Bachelors in Electronics and Communication Engineering | Sastra University</li>
                          </ul>
                      </div>
                  </div>
                  <div className="resume">
                      <button onClick={handleDownloadResume} className="btn" aria-label='Download-resume-button'>Download Resume</button>
                  </div>
            </div>
          </div> 

        </div>

        <div className='services-section' id='services'>
          <div className='container'>
            <h1 className="sub-header">Services</h1>

            <div className="services-list">
                <div>
                    <FontAwesomeIcon icon={faCode}/>
                    <h2><strong>Web & App Development</strong></h2>
                    <p>Web applications are crucial for delivering high-quality products. I take pleasure in coding in various languages to assist clients in achieving their objectives.</p>
                </div>

                <div>
                    <FontAwesomeIcon icon={faMicrochip}/>
                    <h2><strong>Big Data Services</strong></h2>
                    <p>Empower your business with our comprehensive big data services leveraging leading cloud platforms such as Azure, GCP, and AWS.</p>
                </div>

                <div>
                    <FontAwesomeIcon icon={faPenRuler}/>
                    <h2><strong>Web Design</strong></h2>
                    <p>User Experience (UX) is crucial for a quality product. I enjoy designing with various tools to create exceptional products.</p>
                </div>

            </div>

          </div>
        </div>

        <div className='portfolio-section' id='portfolio'>
          <div className='container'>
            <h1 className='sub-header'>Portfolio</h1>

            <div className='work-list'>
                <div className="work">
                    <img src={workpic1} alt='Krishna-Uttej-Github' />
                    <div className="layer">
                        <h3><strong>Chat Messaging App</strong></h3>
                        <p>Chat Messaging Application using ReactJS on the client side and NodeJS on the server side.</p>
                        <a href="https://github.com/krishnauttej/Chat-Messaging-App" target="_blank" rel="noreferrer noopener" aria-label='Krishna-Uttej-github-webpage'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic6} alt='Krishna-Uttej-website' />
                    <div className="layer">
                        <h3><strong>Business Website</strong></h3>
                        <p>The website that showcases all the software & solutions provided.</p>
                        <a href="https://github.com/krishnauttej/PortfolioWebsite" target="_blank" rel="noreferrer noopener" aria-label='Krishna-Uttej-website-link'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>
           

                <div className="work">
                    <img src={workpic2} alt='Creotec' />
                    <div className="layer">
                        <h3><strong>Spring Boot Excel Export</strong></h3>
                        <p> This app is used to store millions of records of backend responses in Excel format.</p>
                        <a href="https://github.com/krishnauttej/Spring-Boot-Excel-Export" target="_blank" rel="noreferrer noopener" aria-label='Creotec-website-link'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>
            </div>

            {showMore && (
            <div className="work-list-2">          
                <div className="work">
                    <img src={workpic3} alt='Center-for-financial-literacy' />
                    <div className="layer">
                        <h3><strong>Fake News Detection App using NLP</strong></h3>
                        <p>This app Detects whether news is real or fake using Machine Learning and Natural Language Processing.</p>
                        <a href="https://github.com/krishnauttej/fake-news-detection" target="_blank" rel="noreferrer noopener" aria-label='Center-for-financial-literacy-linkedin-link'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic5} alt='Krishna-Uttej-Github' />
                    <div className="layer">
                        <h3><strong> Covid 19 Data Analysis using Azure Cloud and PySpark</strong></h3>
                        <p>Extracted Covid 19 insights using Azure Data Lake Storage and Data Bricks.</p>
                        <a href="https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/8577311912491833/3722342730047005/338606020952490/latest.html" target="_blank" rel="noreferrer noopener" aria-label='Krishna-Uttej-github-webpage'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic4} alt='Krishna-Uttej-website' />
                    <div className="layer">
                        <h3><strong>Quiz App Using React</strong></h3>
                        <p>This app is used to test knowledge of users.</p>
                        <a href="https://github.com/krishnauttej/React-JS-Quiz-App" target="_blank" rel="noreferrer noopener" aria-label='Krishna-Uttej-website-link'> <FontAwesomeIcon icon={faLink}/></a> 
                     </div>
                </div>
            </div>
            )} 

           <div className="button-container">
              {!showMore && <button className="btn" id="view-more" aria-label='View-more-button' onClick={handleViewMore}>View more</button>}
              {showMore && <button className="btn" id="hide" aria-label='Hide-button' onClick={handleHide}>Hide</button>}
            </div> 

          </div>
        </div>

        <div className='contact-section' id='contact'>
          <ContactSection/>
        </div>
    </div>
  )
}

export default Home