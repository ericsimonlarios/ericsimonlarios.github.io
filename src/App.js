import logo from './logo.svg';
import './App.css';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { ImMail4 } from "react-icons/im";
import { FaRegCopyright } from "react-icons/fa";


import React, {Component, useEffect, useRef, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null)
  
  useEffect(() => {

    let options = {
      threshold: 0.25
    }

    let callBack = (entries, observe) => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting)
        setIntersecting(entry.isIntersecting)
      });
    }

    let observer = new IntersectionObserver(callBack, options)
   
     observer.observe(ref.current)

  },[])

  useEffect(()=>{
    console.log(isIntersecting)
    if(!isIntersecting){
      document.getElementById('stickyBar').classList.add('slideDown');
    }else{
      document.getElementById('stickyBar').classList.remove('slideDown');
    }

  },[isIntersecting])
  
  
  return (
    <div className="bg-cover w-full">
      
      <div id="stickyBar" className='stickyBar fixed top-0 bg-black w-full flex justify-center px-6 py-4'>
          <div id="stickyBar-container" className='w-full text-lg flex justify-between lg:w-5/6 lg:text-lg '>
            <div className='navItem text-white font-bold p-2'><a href="#home">simon.dev⚙️</a></div>
            
            <div className='flex flex-row'>
              <div className='navItem navHover text-white font-bold p-2'><a href="#home">Home</a></div>
              <div className='navItem navHover text-white font-bold p-2'><a href="#about">About</a></div>
              <div className='navItem navHover text-white font-bold p-2'><a href="#projects">Projects</a></div>
              <div className='navItem navHover text-white font-bold p-2'><a href="#contact">Contact</a></div>
            </div>

          </div>
        </div>

      
      <div id="home" ref={ref} className="home-bg flex h-auto sm:h-screen  items-center w-full flex-col">

        <div id="navBar" className='w-full flex justify-center p-8'>
          <div id="navBar-container" className='w-full text-lg flex flex-row justify-between  lg:w-3/4  lg:text-lg '>
            <div className='navItem navHover text-white font-bold p-2'><a href="#home">Home</a></div>
            <div className='navItem navHover text-white font-bold p-2'><a href="#about">About</a></div>
            <div className='navItem navHover text-white font-bold p-2'><a href="#projects">Projects</a></div>
            <div className='navItem navHover text-white font-bold p-2'><a href="#contact">Contact</a></div>
          </div>
        </div>

        <div id="home-container" className='h-auto w-5/6 items-center justify-between flex flex-col-reverse lg:h-full lg:flex-row '>
        <div id="home-content" className='lg:h-full h-auto lg:w-3/5 w-full flex items-center px-6'>
          
          <div className=' w-full lg:text-left text-center'>
            <div><p className='text-white lg:text-4xl text-lg font-bold py-4'>Hi, I'm Eric Simon | <span className="border-b-4 border-[#FBBF24]">Aspiring Software Developer</span></p></div>

            <div className ="socMed-icons lg:text-4xl lg:text-left text-center text-3xl justify-center lg:justify-start flex flex-row py-4">

            <p className='yellow-color navHover w-fit text-white py-2 pr-2'><a target="_blank" href="https://www.linkedin.com/in/eric-simon-larios-561184217/" className='hoverAnchor'><FaLinkedin /></a></p>
            <p className='yellow-color navHover w-fit text-white p-2'><a target="_blank" href="mailto:larios.ericsimon.122@gmail.com" className='hoverAnchor'><ImMail4 /></a></p>
            <p className='yellow-color navHover w-fit text-white p-2'><a target="_blank" href="https://github.com/ericsimonlarios" className='hoverAnchor'><FaGithub /></a></p>

            </div>
            <div className="lg:text-xl text-lg flex flex-row"><p className='text-white'>I build web and mobile apps 👨‍💻🖥️ I am a lifelong learner 📖 and I might have an obsession with anti-hero protagonists🥴</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
         <div className='img-container-1'>
          <img src={require("./assets/sitting-on-a-moon.png")} 
          alt='sitting on a moon'
          className='h-full w-full'
          />
         </div>
        </div>
        </div>
       
      </div>

      <div id="about" className="bg-cover lg:h-screen h-auto box w-full flex justify-center items-center flex-col ">

    
        <div id="about-container" className="h-full w-5/6 flex lg:flex-row items-center flex-col-reverse">
        <div id="about-content" className='h-full lg:w-9/12 w-full flex flex-row items-center lg:p-6 py-6'>
          <div className='lg:w-5/6 w-full flex flex-col'>
            <div className="aboutMeTitle flex min-[1330px]:flex-row flex-col-reverse ">
              <div className = "lg:w-2/5 w-full lg:p-0 lg:py-6 pt-6 lg:justify-start justify-center flex items-end">
                <p className='dark-blue-color drop-shadow-lg min-[1330px]:text-5xl text-4xl font-bold navHover'>About me</p>
              </div>

              <div className='flex min-[1330px]:w-3/5 w-full min-[1330px]:justify-center  h-auto'>
                <ul className="techStack">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    PHP
                  </li>
                  <li>
                    MySQL
                  </li>
                  <li>
                    React Native
                  </li>
                  <li>
                    Android Studio
                  </li>
                  <li>
                    Java
                  </li>
                  <li>
                    Firebase
                  </li>
                </ul>
              </div>
            </div>

            <div className ="socMed-icons py-2 min-[1330px]:text-lg text-md open_sans">

              <p className='text-black text-start py-2'>Currently in my senior year pursuing BS in Computer Engineering at Polytechnic University of the Philippines, my focus has been on developing websites and mobile apps. At the moment, I am trying to learn React and Nodejs.</p>
              
              <p className='text-black text-start py-2'>Throughout my academic journey, I've developed a strong passion for both web and mobile app development. I've published an e-commerce website catering to keyboard enthusiasts, utilizing HTML, CSS, JavaScript, PHP, and MySQL. Additionally, I'm currently working with a team on a tutor booking app built with React Native and Firebase. It is now currently on its testing phase and we are excited to release it on the Play Store.</p>

              <p className='text-black text-start py-2'>When I'm not immersed in coding, I find solace in playing the guitar, engaging in conversations with friends, and escaping into captivating books and fantasy realms.</p>
            </div>

            </div>
          </div>

            <div className='flex items-center lg:py-0 pt-12'>
              <div className='img-container-2  rounded-lg box-shadow drop-shadow-lg shadow-3xl'>
              <img src={require("./assets/profile-pic-4.JPG")} 
              alt='profile pic'
              className='h-full w-full rounded-lg'
              />
             </div>
            </div>
        </div>

      </div>

      <div id="projects" className="flex flex-col h-auto w-full items-center">

      {/* <div id="projects-container1" className='h-auto w-10/12 flex flex-col justify-center'>

         */}

        <div id="projects-1" className='flex lg:h-screen h-auto w-full flex-col justify-center items-center '>
          
          <div className="flex items-center justify-center text-5xl w-full top-left-box lg:h-1/6 h-8/12 font-bold text-white drop-shadow-lg">
            <div className='w-5/6 lg:p-6 pb-16 pt-8 lg:text-5xl text-4xl'>
              <h3 className='navHover w-fit'>Projects</h3>
            </div>
          </div>

          <div className='w-5/6 h-5/6 flex lg:flex-row flex-col justify-between items-center lg:px-6'>
          <div id="ft1-content-container" className='lg:w-3/5 w-full flex lg:items-start items-center flex-col '>
              <div className='lg:text-3xl text-2xl dark-blue-color font-bold'>
                Gooby Keyboard - Ecommerce Website
              </div>

              <div className='lg:text-xl text-lg text-gray-700 py-4'>
                Full Stack Developer | School Project
              </div>

              <div className='flex w-full h-auto lg:justify-start justify-center'> 
                <ul className="techStack">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    PHP
                  </li>
                  <li>
                    MySQL
                  </li>
                </ul>
              </div>

              <button class="view-proj-btn view-proj-btn:hover text-black text-xl font-bold my-10 py-4 px-12 border-b-4 darker-yellow rounded">
                View more
              </button>

              <div className ="project-description lg:text-xl text-lg open_sans">
              This E-commerce website caters to keyboard enthusiasts. It offers keyboard components like switches, key caps, and custom keyboards as well. It is the first fully functional website I have built, and during its development, I gained valuable experience in various techniques, particularly in server communication and utilizing AJAX to exchange data with the web server seamlessly.
              </div>

              </div>

              <div className='ft1 rounded-lg flex flex-row justify-center items-center'>

              <div id="ft1-img-banner " className='lg:ft1-img-banner box-shadow h-[315px] w-[315px] lg:py-0 my-6 rounded-lg shadow-3xl border-2 '>
               <img className ="h-full w-full rounded-lg" src={require('./assets/gooby_keyboard_logo.gif')}/>
              </div>

              </div>
          </div>

        </div>

        <div id="projects-2" className='flex lg:h-screen h-auto w-full flex-col justify-center items-center '>
          
          <div className='w-5/6 h-5/6 flex lg:flex-row flex-col justify-between items-center lg:px-6'>
          <div id="ft1-content-container" className='lg:w-3/5 w-full flex lg:items-start items-center flex-col'>
              <div className='lg:text-3xl text-2xl dark-blue-color font-bold'>
              Taguro - A Tutor Booking App
              </div>

              <div className='lg:text-xl text-lg text-gray-700 py-4'>
                Full Stack Developer | Specialization Project
              </div>

              <div className='flex w-full h-auto lg:justify-start justify-center'> 
                <ul className="techStack">
                  <li>
                    React Native
                  </li>
                  <li>
                    Firebase
                  </li>
                  <li>
                    Android
                  </li>
                  <li>
                    React
                  </li>
                  <li>
                    OpenCV
                  </li>
                </ul>
              </div>

              <button class="view-proj-btn view-proj-btn:hover text-black text-xl font-bold my-10 py-4 px-12 border-b-4 darker-yellow rounded">
                View more
              </button>

              <div className ="project-description lg:text-xl text-lg open_sans">
              Tagapagturo, also known as "Taguro" is a tutor booking app developed by a team of three (3) using React Native and Firebase. This app provides tutors with a platform to expand their tutoring services through online channels. It includes various features such as an in-app chat system, a booking system, an in-app video meeting capability, as well as a verification and rating system.
              </div>

              </div>

              <div className='ft1 rounded-lg flex flex-row justify-center items-center'>

              <div id="ft1-img-banner " className='lg:ft1-img-banner box-shadow h-[315px] w-[315px] lg:py-0 my-6 rounded-lg shadow-3xl border-2 '>
               <img className ="h-full w-full rounded-lg" src={require('./assets/taguro-app.gif')}/>
              </div>

             
              </div>
              </div>
              
          </div>

        <div id="projects-3" className='flex lg:h-screen h-auto w-full flex-col justify-center items-center'>
          
        <div className='w-5/6 h-5/6 flex lg:flex-row flex-col justify-between items-center lg:px-6'>
          <div id="ft1-content-container" className='lg:w-3/5 w-full flex lg:items-start items-center flex-col'>
              <div className='lg:text-3xl text-2xl dark-blue-color font-bold'>
                REFORM - Prison Appointment System
              </div>

              <div className='lg:text-xl text-lg text-gray-700 py-4'>
                Full Stack Developer | Capstone Project | Commission
              </div>

              <div className='flex w-full h-auto lg:justify-start justify-center'> 
                <ul className="techStack">
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    PHP
                  </li>
                  <li>
                    MySQL
                  </li>
                </ul>
              </div>

              <button class="view-proj-btn view-proj-btn:hover text-black text-xl font-bold my-10 py-4 px-12 border-b-4 darker-yellow rounded">
                View more
              </button>

              <div className ="project-description lg:text-xl text-lg open_sans">
              REFORM is an appointment web system that allows users to book for an appointment at disciplininary institutions. It is built with the intention to offer an easy way to manage and monitor appointments for prisoners through online/modern technology as a means of an upgrade from the old and traditional way. Additionally, this makes it easier for disciplininary institutions to monitor visitors, prisoners, and jailors, as it is equipped with admin system.
              </div>

              </div>

              <div className='ft1 rounded-lg flex flex-row justify-center items-center'>

              <div id="ft1-img-banner " className='lg:ft1-img-banner box-shadow h-[315px] w-[315px] lg:py-0 my-6 rounded-lg shadow-3xl border-2 '>
               <img className ="h-full w-full rounded-lg" src={require('./assets/reform_bg.png')}/>
              </div>

              </div>
              </div>
              
              <button class="view-proj-btn lg:w-2/6 w-5/6 view-proj-btn:hover text-black text-xl font-bold my-10 py-4 px-12 border-b-4 darker-yellow rounded">
                Check out my other projects!
              </button>
         </div>

      

      </div>

    <div id="contact" className=" bg-covers h-screen w-full">

      <div id="contact-container" className="h-full w-full flex flex-col justify-center">
      <div id="contact-content" className='h-full contact-box w-full flex flex-col justify-center items-center'>
        <div className='lg:w-4/6 lg:w-5/6 w-full h-full flex items-center justify-around flex-col'>
          <div className="aboutMeTitle h-3/6 w-5/6 justify-end lg:p-0 py-4 flex flex-col lg:mb-4">
            <div className = "flex flex-col items-center justify-center">
              <p className='text-white lg:text-3xl text-xl text-center drop-shadow-lg white-stroke'>Want to work on something amazing together?</p>
              <p className='yellow-color navHover w-fit white-stroke text-center lg:text-5xl text-3xl font-bold drop-shadow-lg lg:py-6 pt-8'>Let's have a chat! </p>
            </div>
          </div>
      
          <div className="aboutMeTitle h-3/6 w-full flex items-center flex-col justify-center">
          

                <div className="w-full flex lg:flex-row flex-col justify-center lg:p-4">
                
                  <a target="_blank" href="https://www.linkedin.com/in/eric-simon-larios-561184217/" className='navHover'> 
                    <div className='flex flex-col items-center p-4 onHoverDiv'>
                      <p className='dark-blue-color text-center lg:text-5xl text-2xl lg:p-2 drop-shadow-lg'> <FaLinkedin /></p>
                      <p className='dark-blue-color font-bold text-center lg:text-xl lg:p-2 text-md'> Eric Simon Larios</p>
                    </div>
                  </a>
               
                  <a target="_blank" href="mailto:larios.ericsimon.122@gmail.com" className='navHover'> 
                    <div className='flex flex-col items-center p-4 onHoverDiv'>
                    <p className='dark-blue-color text-center lg:text-5xl text-2xl lg:p-2 drop-shadow-lg'> <ImMail4 /></p>
                    <p className='dark-blue-color font-bold text-center lg:text-xl lg:p-2 text-md'>larios.ericsimon.122@gmail.com</p>
                    </div>
                  </a>
                
                  <a target="_blank" href="https://github.com/ericsimonlarios" className='navHover'> 
                  <div className='flex flex-col items-center p-4 onHoverDiv'>
                    <p className='dark-blue-color text-center lg:text-5xl text-2xl lg:p-2 drop-shadow-lg'> <FaGithub /></p>
                    <p className='dark-blue-color font-bold text-center lg:text-xl lg:p-2 text-md'> ericsimonlarios</p>
                  </div>
                  </a>

                </div>
     
          </div>
        </div>
      
        </div>
      </div>

      <div className='w-full lg:h-1/6 h-auto contact flex lg:flex-row flex-col justify-center '>
          <div className="aboutMeTitle h-full lg:w-full justify-around lg:items-center lg:p-0 p-6 flex lg:flex-row flex-col">
            <div className = "flex flex-col justify-center lg:text-lg text-md lg:p-0 py-4">
              <div>
              <p className='text-white font-bold drop-shadow-lg'>Eric Simon Larios </p>
              </div>

              <div className='flex'>
              <p className='yellow-color font-bold drop-shadow-lg flex items-center'><FaRegCopyright/> </p>
              <p className='yellow-color font-bold drop-shadow-lg ml-1'> 2023, built and designed by</p>
              
              </div>

              <div>
              <p className='yellow-color font-bold drop-shadow-lg'>Eric Simon Larios </p>
              </div>
            </div>

            <div className = "flex flex-col lg:text-lg text-md justify-center lg:p-0 py-4">
              <div>
              <p className='text-white font-bold drop-shadow-lg'>Links </p>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                <p className='font-bold drop-shadow-lg flex items-center'><a href='#home' className='yellow-color hoverAnchor'>Home</a> 
                </p>
              
                <p className='font-bold drop-shadow-lg flex items-center'><a href='#projects' className='yellow-color hoverAnchor'>Projects</a> 
                </p>
                
                </div>

                <div className='flex flex-col'>
                <p className='font-bold drop-shadow-lg mx-4'> <a href='#about' className='yellow-color hoverAnchor'> About</a> </p>
                <p className='font-bold drop-shadow-lg mx-4'> <a href='#contact' className='yellow-color hoverAnchor'> Contacts</a> </p>
                </div>
              </div>

            </div>

            <div className = "flex flex-col justify-center lg:p-0 py-4">
              <div>
              <p className='text-white lg:text-lg text-md font-bold drop-shadow-lg'>Get in Touch</p>
              </div>

              <div className ="socMed-icons flex flex-row">
              <p className='yellow-color text-white text-4xl py-2 pr-2'><a target="_blank" href="https://www.linkedin.com/in/eric-simon-larios-561184217/" className='hoverAnchor'><FaLinkedin /></a></p>
              <p className='yellow-color text-white text-4xl p-2'><a target="_blank" href="mailto:larios.ericsimon.122@gmail.com" className='hoverAnchor'><ImMail4 /></a></p>
              <p className='yellow-color text-white text-4xl p-2'><a target="_blank" href="https://github.com/ericsimonlarios" className='hoverAnchor'><FaGithub /></a></p>
              </div>
            </div>
          </div>
        </div>

    

       
      {/* </div> */}
       
      </div>

    </div>
  );
}

export default App;
