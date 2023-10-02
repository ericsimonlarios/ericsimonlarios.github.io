import logo from './logo.svg';
import './App.css';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { ImMail4 } from "react-icons/im";
import {GiHamburgerMenu } from "react-icons/gi"
import { FaRegCopyright } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci"
import { FaReact } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi"
import React, {Component, useEffect, useRef, useState} from 'react';

import { Outlet, Link } from "react-router-dom";
  function App() {
  const [isIntersecting, setIntersecting] = useState(false);
  const [expertIntersect, setExpertIntersect] = useState(false) 
  const [FTProjIntersect, setFTProjIntersect] = useState(false) 
  const [OTProjIntersect, setOTProjIntersect] = useState(false)
  const [isToggle, setToggle] = useState(false);
  
  const ref = useRef(null)
  const expertiseRef = useRef(null)
  const FTProjRef = useRef(null)
  const OTProjRef = useRef(null)
  // const navigate = useNavigate();

  useEffect(() => {
    document.title = "Simon Dev Portfolio";
  }, []);

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

    let callBack2 = (entries, observe) => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting)
        setExpertIntersect(entry.isIntersecting)
      });
    }

    let callBack3 = (entries, observe) => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting)
        setFTProjIntersect(entry.isIntersecting)
      });
    }

    let callBack4 = (entries, observe) => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting)
        setOTProjIntersect(entry.isIntersecting)
      });
    }

    let observer = new IntersectionObserver(callBack, options)
    let observer2 = new IntersectionObserver(callBack2, options)
    let observer3 = new IntersectionObserver(callBack3, options)
    let observer4 = new IntersectionObserver(callBack4, options)

     observer.observe(ref.current)
     observer2.observe(expertiseRef.current)
     observer3.observe(FTProjRef.current)
     observer4.observe(OTProjRef.current)
  },[])

useEffect(()=>{
  
  const box = document.getElementById("root");
  const shadow = document.getElementById("flashlight");
  
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };
  
  function getMousePosition(e) {
    try{
      let mouseX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      let mouseY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      
      if(mouseX && mouseY){
        shadow.style.setProperty("--Xpos", mouseX + "px");
        shadow.style.setProperty("--Ypos", mouseY + "px");
      }
    
    }
    catch(error){

    }
  }
  
  box.addEventListener("mousemove", getMousePosition);
  box.addEventListener("touchmove", getMousePosition);
  
},[])

useEffect(()=>{
    console.log(isIntersecting)
    if(isIntersecting){
      document.getElementById('subtitle').classList.add('slide-1');

      document.getElementById('titleLinks').classList.add('slide-2');

      document.getElementById('subHeading').classList.add('slide-3');

    }

    if(expertIntersect){
      document.getElementById('expertiseTitle').classList.add('slide-1');
      
      document.getElementById('FE').classList.add('slide-1');
      document.getElementById('BE').classList.add('slide-1');
      document.getElementById('MD').classList.add('slide-1');
      document.getElementById('ViewResume').classList.add('slide-3');
    }

    if(FTProjIntersect){
      document.getElementById('FTProjTitle').classList.add('slide-1')
      document.getElementById('FTProjTitle1').classList.add('slide-2')
      document.getElementById('FTProjRole').classList.add('slide-2')
      document.getElementById('FTProjTags').classList.add('slide-2')
      document.getElementById('FTProjDesc').classList.add('slide-3')
      document.getElementById('FTProjRed').classList.add('slide-3')
      document.getElementById('FTProjImage').classList.add('slide-3')
    }

    if(OTProjIntersect){
      document.getElementById('OTProjTitle').classList.add('slide-1')
      document.getElementById('other-projects').classList.add('slide-1')
    }

},[isIntersecting, expertIntersect, FTProjIntersect, OTProjIntersect])


  const navigation = (target) => {
    // navigate(target)
  }
  return (

    <div id="main-container" className="bg-[#040e2c] w-full h-full">
      <div id="flashlight" className="shadow"></div>
      <div id="home"  className=" bg-gradient-1 flex h-screen items-center w-full flex-col pb-8">

        <div id="navBar" className='w-full z-10 flex justify-center p-8'>
          <div id="navBar-container" className='w-full text-sm flex flex-row justify-around lg:w-3/4 lg:text-lg '>
            <div className='navItem  text-white font-bold p-2'><a href="#home">#home</a></div>
            <div className='navItem text-white font-bold  p-2'><a href="#about">#about</a></div>
            <div className='navItem text-white font-bold   p-2'><a href="#projects">#projects</a></div>
            <div className='navItem text-white font-bold  p-2'><a href="#contact">#contact</a></div>
          </div>
        </div>

        <div id="home-container"  className='h-full z-10 w-5/6 items-center justify-center flex lg:h-full'>
          <div id="home-content" ref={ref} className='h-auto lg:w-full w-full flex flex-col items-center justify-center px-6'>
            
            <div className='flex justify-center items-center'>
              <div className=' lg:w-[200px] lg:h-[200px] w-[150px]  h-[150px]'>
                <img src={require("./assets/profile-pic-4.JPG")} 
                alt='sitting on a moon'
                className='h-full w-full border-4 border-[#F07742] rounded-full'
                />
              </div>
            </div>
          

            <div className=' lg:w-3/5 w-full text-center justify-center flex flex-col items-center'>
              <div><p className='text-white lg:text-5xl text-3xl font-bold py-2'>Eric Simon Larios</p></div>

              <div id="subtitle" className='withAnim'><p className='text-[#10D694] lg:text-2xl text-lg font-bold py-2'>SOFTWARE DEVELOPER</p></div>
              <div id="titleLinks" className ="withAnim socMed-icons text-5xl text-center justify-center flex flex-row py-2">

              <p className='yellow-color w-fit text-white py-2 pr-2'><a target="_blank" href="https://www.linkedin.com/in/eric-simon-larios-561184217/" className='hoverAnchor'><FaLinkedin /></a></p>
              <p className='yellow-color w-fit text-white p-2'><a target="_blank" href="mailto:larios.ericsimon.122@gmail.com" className='hoverAnchor'><ImMail4 /></a></p>
              <p className='yellow-color w-fit text-white p-2'><a target="_blank" href="https://github.com/ericsimonlarios" className='hoverAnchor'><FaGithub /></a></p>

              </div>
              <div id="subHeading" className="withAnim lg:text-xl text-lg flex flex-row py-4 justify-center"><p className='text-white'>I build web and mobile apps 👨‍💻🖥️ I am a lifelong learner 📖 and I might have an obsession with anti-hero protagonists🥴</p>
              </div>
             
            </div>

          </div>
        
        </div>

      </div>

      <div id="about" ref={expertiseRef} className=" z-10 lg:h-screen h-auto w-full flex justify-start items-center flex-col py-8">

        <div id="about-container" className="h-5/6 w-5/6 z-10 flex items-center justify-center lg:flex-row flex-col-reverse">
          <div id="about-content"  className='h-5/6 w-11/12 z-10 flex flex-row lg:p-2 p-2'>
            <div className=' w-full flex flex-col z-10 justify-around'>
              <div id="expertiseTitle" className = "w-full withAnimDown lg:py-2 pt-2 flex justify-center">
                <p className='yellow-color text-center drop-shadow-lg min-[1330px]:text-6xl text-4xl font-black navHover'><span className='text-white'>My</span> Expertise</p>
              </div>

              <div className ="socMed-icons min-[1330px]:text-lg z-10 flex lg:flex-row flex-col justify-between items-center lg:p-0">
                <div id="FE" className='withAnimLeft w-[350px] z-10 h-[350px] border-l-8 border-l-[#10D694] rounded-l-lg border-2 border-[#2eb2c163]/30 lg:m-0 m-4 shadow-inner shadow-lg shadow-[#2eb2c163]/50 '>
                  <div className="flex h-2/6 items-center z-10 text-white border-b-2 border-[#10D694] p-2">
                    <div>
                      <p className='flex items-center text-5xl text-[#10D694] p-2'><FaReact/></p> 
                    </div>
                    <div>
                      <p className='flex items-center text-2xl p-2 font-bold '>Front-end Development</p>
                    </div>
                  </div>
                  <div className='h-4/6 flex justify-center z-10 items-center p-2'>
                    <div className="FEDivider flex flex-row text-white p-4">
                      <div className="FEDivider2 text-md flex">
                      Strives to deliver user-friendly designs with JavaScript, HTML, CSS, along with familiarity in ReactJS.
                      </div>
                    </div>
                  </div>
                 
                </div>

                <div id="BE" className='withAnim w-[350px] z-10 h-[350px] flex items-center  flex-col border-2 border-[#474A8A]/50 shadow-inner shadow-lg shadow-[#474A8A]/70 lg:m-0 m-4'>
                  <div className="flex h-2/6 items-center z-10 text-white p-2 border-b-2 border-[#474A8A]">
                    <div>
                      <p className='flex items-center text-6xl text-[#474A8A] p-2 '><BiCodeAlt /></p> 
                    </div>
                    <div>
                      <p className='flex items-center text-2xl p-2 font-bold'>Back-end Development</p>
                    </div>
                  </div>

                  <div className='h-4/6 flex justify-center z-10 items-center p-2'>
                    <div className="headerDivider flex flex-row text-white p-2">
                      <div className="headerDivider2 text-md flex">
                      Possesses a solid background in PHP and Node.js, with a track record of working with MySQL and Firebase.
                      </div>
                    </div>
                  </div>
                 
                </div>

                <div id="MD" className='withAnimRight w-[350px] z-10 h-[350px] border-r-8 border-r-[yellow] rounded-r-lg border-2 border-[yellow]/30 shadow-inner shadow-lg shadow-[yellow]/50 lg:m-0 m-4'>
                  <div className="flex h-2/6 items-center z-10 text-white border-b-2 border-[yellow] p-2">
                    <div>
                      <p className='flex items-center text-6xl text-[yellow] p-2'><CiMobile4 /></p> 
                    </div>
                    <div>
                      <p className='flex items-center text-2xl p-2 font-bold '>Mobile Development</p>
                    </div>
                  </div>

                <div className='h-4/6 flex justify-center z-10 items-center p-2'>
                  <div className="MDivider flex flex-row text-white p-2">
                    <div className="MDivider2 text-md flex">
                      Proficient in NodeJS, Java, React Native, Android Studio, and Firebase, developing high-quality mobile applications.
                    </div>
                  </div>
                </div>

                </div>

             
              </div>

            </div>
            
          </div>

          </div>

          <Link to={'https://drive.google.com/file/d/1cxS83JeRGW5KpNefKwxWnXtALe0h4BVL/view?usp=sharing'} target='_blank'>
          <div id="ViewResume" className="withAnim ">
            <button class="view-proj-btn button-3 w-fit text-black lg:text-xl text-md font-bold p-4 border-b-4 darker-yellow rounded lg:m-0 m-4">
               View Resume
            </button>
          </div>
          </Link>
      </div>

      <div id="projects" className="bg-[#040e2c] z-10 flex flex-col h-auto w-full justify-center items-center py-8">

        <div id="projects-1" className='flex lg:h-screen h-auto w-5/6 flex-col justify-center items-center '>
          

        <div ref={FTProjRef}  className='w-11/12 flex lg:flex-row flex-col justify-between items-center py-8'>
          <div id="ft1-content-container"  className='lg:w-3/5 w-full flex lg:items-start items-center flex-col '>

              <div id="FTProjTitle" className='withAnim'>
                <p className='yellow-color drop-shadow-lg min-[1330px]:text-6xl text-3xl font-black navHover'> <span className='text-white'>Featured</span> Project</p>
              </div>

              <div className='w-full flex lg:items-start items-center flex-col py-6'>
                <div id="FTProjTitle1" className='withAnim lg:text-4xl text-2xl yellow-color font-bold'>
                  Taguro - A Tutor Booking App
                </div>

                <div id="FTProjRole" className='withAnim lg:text-xl text-lg text-white py-4'>
                Full Stack Developer | Specialization Project
                </div>

                <div id="FTProjTags" className='withAnim flex w-full h-auto lg:justify-start justify-center'> 
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
                    NodeJS
                  </li>
                </ul>
               </div>

              
                <div id="FTProjDesc" className ="withAnim lg:w-4/6 w-full project-description lg:text-lg text-md text-white py-4">
                A mobile app that offers a platform for tutors that desires to expand their tutoring services online
                </div>

                <Link  to = {'https://youtu.be/QNI_JdOZhCI'} target="_blank">
                <div id="FTProjRed" className ="withAnim">
                  <button class="view-proj-btn button-3 w-fit text-black lg:text-xl text-md font-bold p-4 my-6 border-b-4 darker-yellow rounded">
                      Demo Video
                  </button>
                </div>
               
                </Link>

                {/* <div className ="project-description lg:text-lg text-md text-white">
                "Tagapagturo," or "Taguro" for short, is a tutor booking app created by a team of three using React Native and Firebase. This app offers tutors a platform to expand their tutoring services online. It comes with useful features like an in-app chat system, a booking system, the ability to conduct video meetings within the app, and a verification and rating system for added trust and quality assurance.
                </div> */}

              </div>
            </div>
             
            <div id="FTProjImage" className='withAnimRight  ft1 rounded-lg flex flex-row justify-center items-center'>

              <div id="ft1-img-banner " className='lg:ft1-img-banner min-[1330px]:h-[600px]  h-[450px] min-[1330px]:w-[400px] w-[300px] lg:py-0 my-6 rounded-lg '>
              <img className ="h-full w-full object-cover z-10" src={require('./assets/taguro-gif.gif')}/>
              </div>

            </div>
          </div>

        </div>
        
        <div className='flex z-10 h-auto w-5/6 flex-col items-center py-8'>
          <div ref={OTProjRef} className='w-11/12 h-auto flex justify-center flex-col'>
            <div id="OTProjTitle" className='withAnimDown py-8 flex max-[1400px]:justify-center'>
              <p className='yellow-color w-fit drop-shadow-lg min-[1330px]:text-6xl text-4xl min- font-black navHover'> <span className='text-white'>Other</span> Projects</p>
            </div>
            <div id="other-projects" className='withAnimDown w-full h-auto grid justify-center items-center min-[1400px]:grid-cols-3 min-[1000px]:grid-cols-2 auto-cols-auto gap-8 grid-flow-row'>
                <div className='shadow-lg shadow-[#2eb2c163]/50 transition ease-in-out delay-100 hover:-translate-y-2 hover:shadow-[#2eb2c163]/100 duration-500 w-[350px] h-[400px] place-self-center bg-[#1f1f1f] border-2 flex flex-col rounded-t-2xl border-[#2eb2c163] shadow-inner '>
                  <div className='project-banner'>
                    <div className='ft1 bg-black border-b-2 border-[#2eb2c163] flex flex-row justify-center items-center rounded-t-2xl'>
                      <div id="ft1-img-banner " className='lg:ft1-img-banner h-[200px] w-[150px] lg:py-0 '>
                        <img className ="h-full w-full object-cover" src={require('./assets/gooby_keyboard_logo.gif')}/>
                      </div>
                    </div>
                  </div>

                  <div className='px-4 pt-4'>
                    <p className='yellow-color w-fit drop-shadow-lg min-[1330px]:text-3xl text-xl font-black'>Gooby Keyboard</p>
                  </div>
                  <div className='px-4 py-2'>
                    <p className='text-white w-fit drop-shadow-lg min-[1330px]:text-md font-black'>E-commerce Website</p>
                  </div>
                  <div className='flex w-full h-auto lg:justify-start justify-center px-2 text-sm'> 
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

                  {/* <button class="view-proj-btn button-3 w-fit text-black lg:text-md font-bold p-2 m-3 border-b-4 darker-yellow rounded">
                    View More
                  </button> */}
                  <div className='p-4 flex '>

                    <Link to={'https://goobykeyboard.000webhostapp.com/'} target='_blank'>
                      <div className=''>
                        <a className='navItem text-white font-bold text-lg'>#live</a>
                      </div>
                    </Link>

                    <Link to={'https://github.com/ericsimonlarios/gooby_Keyboard'} target='_blank'>
                      <div className='px-4'>
                        <a className='navItem text-white font-bold text-lg'>#code</a>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='w-[350px] h-[400px] transition ease-in-out delay-100 hover:-translate-y-2 hover:shadow-[#2eb2c163]/100 duration-500 place-self-center bg-[#1f1f1f] border-2 flex flex-col rounded-t-2xl border-[#2eb2c163] shadow-inner shadow-lg shadow-[#2eb2c163]/50 '>
                  <div className='project-banner'>
                    <div className='ft1 bg-black border-b-2 border-[#2eb2c163] flex flex-row justify-center items-center rounded-t-2xl'>
                      <div id="ft1-img-banner " className='lg:ft1-img-banner h-[200px] w-[150px] lg:py-0 '>
                        <img className ="h-full w-full object-cover" src={require('./assets/reform_logo.png')}/>
                      </div>
                    </div>
                  </div>

                  <div className='px-4 pt-4'>
                    <p className='yellow-color w-fit drop-shadow-lg min-[1330px]:text-3xl text-xl font-black'>REFORM</p>
                  </div>
                  <div className='px-4 py-2'>
                    <p className='text-white w-fit drop-shadow-lg min-[1330px]:text-md font-black'>Appointment and Directory Website</p>
                  </div>
                  <div className='flex w-full h-auto lg:justify-start justify-center px-2 text-sm'> 
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

                  <div className='p-4 flex '>
                  
                    <Link to={'https://youtu.be/LBunZyqnnA4'} target='_blank'>
                    <div className=''>
                      <a className='navItem text-white font-bold text-lg'>#demo</a>
                    </div>
                    </Link>
                    <Link to={'https://github.com/ericsimonlarios/prison_management'} target='_blank'>
                      <div className='px-4'>
                        <a className='navItem text-white font-bold text-lg'>#code</a>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='w-[350px] h-[400px] transition ease-in-out delay-100 hover:-translate-y-2 hover:shadow-[#2eb2c163]/100 duration-500 place-self-center bg-[#1f1f1f] border-2 flex flex-col rounded-t-2xl border-[#2eb2c163] shadow-inner shadow-lg shadow-[#2eb2c163]/50 '>
                  <div className='project-banner'>
                    <div className='ft1 bg-gray-700 border-b-2 border-[#2eb2c163] flex flex-row justify-center items-center rounded-t-2xl'>
                      <div id="ft1-img-banner " className='lg:ft1-img-banner h-[200px] w-[300px] lg:py-0 '>
                        <img className ="h-full w-full object-contain" src={require('./assets/wsap-logo.png')}/>
                      </div>
                    </div>
                  </div>

                  <div className='px-4 pt-4'>
                    <p className='yellow-color w-fit drop-shadow-lg min-[1330px]:text-2xl text-xl font-black'>WSAP App Launch Site</p>
                  </div>
                  <div className='px-4 py-2'>
                    <p className='text-white w-fit drop-shadow-lg min-[1330px]:text-md font-black'>Static Website</p>
                  </div>
                  <div className='flex w-full h-auto lg:justify-start justify-center px-2 text-sm'> 
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
                        Bootstrap
                      </li>
                 
                    </ul>
                  </div>

                  <div className='p-4 flex '>
                  
                    <Link to={'https://wsap-it-mobiledevteam.github.io/'} target='_blank'>
                    <div className=''>
                      <a className='navItem text-white font-bold text-lg'>#live</a>
                    </div>
                    </Link>

                    <Link to={'https://github.com/ericsimonlarios/WSAP-Web-Mobile-Launching'} target='_blank'>
                    <div className='px-4'>
                      <a className='navItem text-white font-bold text-lg'>#code</a>
                    </div>
                    </Link>

                  </div>
                </div>

                <div className='w-[350px] h-[400px] transition ease-in-out delay-100 hover:-translate-y-2 hover:shadow-[#2eb2c163]/100 duration-500 place-self-center bg-[#1f1f1f] border-2 flex flex-col rounded-t-2xl border-[#2eb2c163] shadow-inner shadow-lg shadow-[#2eb2c163]/50 '>
                  <div className='project-banner'>
                    <div className='ft1 bg-gray-700 border-b-2 border-[#2eb2c163] flex flex-row justify-center items-center rounded-t-2xl'>
                      <div id="ft1-img-banner " className='lg:ft1-img-banner h-[200px] w-[300px] lg:py-0 '>
                        <img className ="h-full w-full object-contain" src={require('./assets/wsap-logo.png')}/>
                      </div>
                    </div>
                  </div>

                  <div className='px-4 pt-4'>
                    <p className='yellow-color w-fit drop-shadow-lg min-[1330px]:text-2xl text-xl font-black'>To do Feature</p>
                  </div>
                  <div className='px-4 py-2'>
                    <p className='text-white w-fit drop-shadow-lg min-[1330px]:text-md font-black'>Mobile App Feature</p>
                  </div>
                  <div className='flex w-full h-auto lg:justify-start justify-center px-2 text-sm'> 
                    <ul className="techStack">
                      <li>
                        Java
                      </li>
                      <li>
                        Firebase
                      </li>
                      <li>
                        Android Studio
                      </li>
                    </ul>
                  </div>

                  <div className='p-4 flex '>
                    <Link to={'https://youtu.be/8k0wENoUe_A'} target='_blank'>
                    <div className=''>
                      <a className='navItem text-white font-bold text-lg'>#demo</a>
                    </div>
                    </Link>
                    
                    <Link to={'https://github.com/ericsimonlarios/WSAPAndroidApp-Planner'} target='_blank'>
                      <div className='px-4'>
                        <a className='navItem text-white font-bold text-lg'>#code</a>
                      </div>
                    </Link>
                  </div>
                </div>

            </div>          
          </div>
        </div>
      </div>

      <div id="contact" className=" z-index-1 bg-covers bg-gradient-2 h-screen w-full">

        <div id="contact-container" className="h-full  w-full flex flex-col justify-center">
        <div id="contact-content" className='h-full  contact-box w-full flex flex-col justify-center items-center'>
          <div className='lg:w-4/6 lg:w-5/6 w-full  h-full flex items-center justify-center flex-col'>
            <div className="aboutMeTitle w-5/6 justify-end items-center lg:p-0 py-4 flex flex-col ">
              <div className = "flex flex-col  items-center justify-center">
                <p className=' w-4/6 text-white lg:text-3xl text-xl text-center drop-shadow-lg white-stroke'>Want to work on something amazing together?</p>
                <p className='yellow-color navHover w-fit white-stroke text-center lg:text-5xl text-3xl font-bold drop-shadow-lg lg:py-6 pt-8'>Let's have a chat! </p>
              </div>
            </div>
         
            <div className="aboutMeTitle w-full flex  flex-col items-center">
            

                  <div className="w-full flex lg:flex-row flex-col items-center justify-center">
                  
                    <a target="_blank" href="https://www.linkedin.com/in/eric-simon-larios-561184217/" className='navHover w-fit'> 
                      <div className='flex flex-col  w-fit  items-center p-4 onHoverDiv'>
                        <p className='text-white text-center lg:text-5xl text-2xl lg:p-2 drop-shadow-lg'> <FaLinkedin /></p>
                        <p className='text-white font-bold text-center lg:text-xl lg:p-2 text-md'> Eric Simon Larios</p>
                      </div>
                    </a>
                
                    <a target="_blank" href="mailto:larios.ericsimon.122@gmail.com" className='navHover w-fit'> 
                      <div className='flex flex-col w-fit  items-center p-4 onHoverDiv'>
                      <p className='text-white text-center lg:text-5xl text-2xl lg:p-2 drop-shadow-lg'> <ImMail4 /></p>
                      <p className='text-white font-bold text-center lg:text-xl lg:p-2 text-md'>larios.ericsimon.122@gmail.com</p>
                      </div>
                    </a>
                  
                    <a target="_blank" href="https://github.com/ericsimonlarios" className='navHover w-fit'> 
                    <div className='flex flex-col w-fit items-center p-4 onHoverDiv'>
                      <p className='text-white text-center lg:text-5xl text-2xl lg:p-2 drop-shadow-lg'> <FaGithub /></p>
                      <p className='text-white font-bold text-center lg:text-xl lg:p-2 text-md'> ericsimonlarios</p>
                    </div>
                    </a>

                  </div>
      
            </div>
          </div>
        
          </div>
        </div>

        <div className='w-full z-index-1 lg:h-1/6 bg-[black] h-auto flex lg:flex-row flex-col justify-center '>
            <div className="aboutMeTitle h-full lg:w-full justify-around lg:items-center lg:p-0 p-6 flex lg:flex-row flex-col">
              <div className = "flex flex-col justify-center text-md lg:p-0 py-4">
                {/* <div>
                <p className='text-white lg:text-lg text-md font-bold drop-shadow-lg'>Eric Simon Larios </p>
                </div> */}

                <div className='flex'>
                <p className='yellow-color font-bold drop-shadow-lg flex items-center'><FaRegCopyright/> </p>
                <p className='yellow-color font-bold drop-shadow-lg ml-1'> 2023, built and designed by</p>
                
                </div>

                <div>
                <p className='text-white font-bold drop-shadow-lg'>yours truly </p>
                </div>
              </div>

              <div className = "flex flex-col text-md justify-center lg:p-0 py-4">
                <div>
                <p className='text-white lg:text-lg font-bold drop-shadow-lg'>Links </p>
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
