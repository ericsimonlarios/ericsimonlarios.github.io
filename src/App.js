import logo from './logo.svg';
import './App.css';
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { ImMail4 } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { FaRegCopyright } from "react-icons/fa";


import React, {Component} from 'react';
import { ReactDOM } from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="main-container bg-cover w-full">

      <div id="home" className="flex h-screen w-full flex-col">

        <div id="navBar" className='w-full flex justify-center p-8'>
          <div id="navBar-container" className='w-3/4 flex flex-row justify-between'>
            <div className='navItem text-white text-lg font-bold p-2'><a href="#home">Home</a></div>
            <div className='navItem text-white text-lg font-bold p-2'><a href="#about">About</a></div>
            <div className='navItem text-white text-lg font-bold p-2'><a href="#projects">Projects</a></div>
            <div className='navItem text-white text-lg font-bold p-2'><a href="#contact">Contact</a></div>
          </div>
        </div>

        <div id="home-container" className='h-full w-full flex'>
        <div id="home-content" className='h-full w-3/5 flex justify-center items-center px-6'>
          
          <div className='w-3/4'>
            <div><p className='text-white text-4xl font-bold'>Hi, I'm Eric Simon | Aspiring Software Developer</p></div>
            <div className ="socMed-icons flex flex-row py-2">
            <p className='yellow-color text-white text-4xl py-2 pr-2'><a href="#twitter" className='hoverAnchor'><FaTwitterSquare /></a></p>
            <p className='yellow-color text-white text-4xl p-2'><a href="#twitter" className='hoverAnchor'><FaFacebookSquare/></a> </p>
            <p className='yellow-color text-white text-4xl p-2'><a href="#twitter" className='hoverAnchor'><FaGithub /></a></p>
            <p className='yellow-color text-white text-4xl p-2'><a href="#twitter" className='hoverAnchor'><ImMail4 /></a></p>
            </div>
            <div><p className='text-white text-xl'>I build web and mobile apps 👨‍💻🖥️ I am a lifelong learner 📖</p>
            <p className='text-white text-xl'>and I might have an obsession with anti-hero protagonists 🥴</p></div>
          </div>
        </div>
        <div className='w-2/5 flex justify-center items-center'>
         <div className='img-container-1 w-72 h-72'>
          <img src={require("./assets/sitting-on-a-moon.png")} 
          alt='sitting on a moon'
          className='h-full w-full'
          />
         </div>
        </div>
        </div>
       
      </div>

      <div id="about" className="bg-cover h-screen box w-full flex justify-center items-center flex-col">

    
        <div id="about-container" className="h-full w-5/6 flex flex-row">
        <div id="about-content" className='h-full w-9/12 flex flex-row items-center p-6'>
          <div className='w-5/6 flex flex-col'>
            <div className="aboutMeTitle flex mb-4">
              <div className = "w-2/5 flex items-end">
                <p className='dark-blue-color text-start drop-shadow-lg text-5xl font-bold'>About me</p>
              </div>

              <div className='flex w-3/5 h-auto'>
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
            </div>

            <div className ="socMed-icons py-2 text-lg open_sans">

              <p className='text-black text-start py-2'>Currently in my senior year pursuing BS in Computer Engineering at Polytechnic University of the Philippines, my focus has been on developing websites and mobile apps. At the moment, I am trying to learn React and Nodejs.</p>
              
              <p className='text-black text-start py-2'>Throughout my academic journey, I've developed a strong passion for both web and mobile app development. I've published an e-commerce website catering to keyboard enthusiasts, utilizing HTML, CSS, JavaScript, PHP, and MySQL. Additionally, I'm currently working with a team on a tutor booking app built with React Native and Firebase. It is now currently on its testing phase and we are excited to release it on the Play Store.</p>

              <p className='text-black text-start py-2'>When I'm not immersed in coding, I find solace in playing the guitar, engaging in conversations with friends, and escaping into captivating books and fantasy realms.</p>
            </div>

            </div>
          </div>

            <div className='w-3/12 flex items-center'>
              <div className='img-container-2 border-4 rounded-lg yellow-border drop-shadow-lg shadow-3xl'>
              <img src={require("./assets/profile-pic-4.JPG")} 
              alt='profile pic'
              className='h-full w-full border-3 rounded-md border-blue'
              />
             </div>
            </div>
        </div>

      </div>

      <div id="projects" className="flex flex-col h-auto w-full items-center">

      {/* <div id="projects-container1" className='h-auto w-10/12 flex flex-col justify-center'>

         */}

        <div id="projects-1" className='flex h-screen w-full top-left-box flex-col justify-center items-center p-6'>
          
          <div className="text-5xl w-5/6 font-bold text-white drop-shadow-lg my-4"><h3>Projects</h3></div>

          <div className='w-5/6 h-full flex flex-row justify-between items-center'>
          <div id="ft1-content-container" className='w-3/5 '>
              <div className='text-3xl dark-blue-color font-bold'>
                Gooby Keyboard - Ecommerce Website
              </div>

              <div className='text-xl text-gray-700 py-4'>
                Full Stack Developer | School Project
              </div>

              <div className='flex w-full h-auto '> 
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

              <div className ="project-description text-xl open_sans">
              This E-commerce website caters to keyboard enthusiasts. It offers keyboard components like switches, key caps, and custom keyboards as well. It is the first fully functional website I have built, and during its development, I gained valuable experience in various techniques, particularly in server communication and utilizing AJAX to exchange data with the web server seamlessly.
              </div>

              </div>

              <div className='ft1 rounded-lg flex flex-row justify-center items-center'>

              <div id="ft1-img-banner " className='ft1-img-banner rounded-lg shadow-3xl border-2 '>
               <img className ="h-full w-full rounded-lg" src={require('./assets/gooby_keyboard_logo.gif')}/>
              </div>

              </div>
          </div>

        </div>

        <div id="projects-2" className='flex h-screen top-right-box w-full flex-col justify-center items-center p-6'>
          
          <div className='w-5/6 h-full flex flex-row justify-between items-center'>
          <div id="ft1-content-container" className='w-3/5 '>
              <div className='text-3xl dark-blue-color font-bold'>
              Taguro - A Tutor Booking App
              </div>

              <div className='text-xl text-gray-700 py-4'>
                Full Stack Developer | Specialization Project
              </div>

              <div className='flex w-full h-auto '> 
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

              <div className ="project-description text-xl open_sans">
              Tagapagturo, also known as "Taguro" is a tutor booking app developed by a team of three (3) using React Native and Firebase. This app provides tutors with a platform to expand their tutoring services through online channels. It includes various features such as an in-app chat system, a booking system, an in-app video meeting capability, as well as a verification and rating system.
              </div>

              </div>

              <div className='ft1 rounded-lg flex flex-row justify-center items-center'>

              <div id="ft1-img-banner " className='ft1-img-banner rounded-lg shadow-3xl border-2 '>
               <img className ="h-full w-full rounded-lg" src={require('./assets/taguro-app.gif')}/>
              </div>

             
              </div>
              </div>
              
          </div>

        <div id="projects-3" className='flex h-screen top-box w-full flex-col justify-center items-center p-6'>
          
        <div className='w-5/6 h-full flex flex-row justify-between items-center'>
          <div id="ft1-content-container" className='w-3/5 '>
              <div className='text-3xl dark-blue-color font-bold'>
                REFORM - Prison Appointment System
              </div>

              <div className='text-xl text-gray-700 py-4'>
                Full Stack Developer | Capstone Project | Commission
              </div>

              <div className='flex w-full h-auto '> 
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

              <div className ="project-description text-xl open_sans">
              REFORM is an appointment web system that allows users to book for an appointment at disciplininary institutions. It is built with the intention to offer an easy way to manage and monitor appointments for prisoners through online/modern technology as a means of an upgrade from the old and traditional way. Additionally, this makes it easier for disciplininary institutions to monitor visitors, prisoners, and jailors, as it is equipped with admin system.
              </div>

              </div>

              <div className='ft1 rounded-lg flex flex-row justify-center items-center'>

              <div id="ft1-img-banner " className='ft1-img-banner rounded-lg shadow-3xl border-2 '>
               <img className ="h-full w-full rounded-lg" src={require('./assets/reform_bg.png')}/>
              </div>

              </div>
              </div>
              
       
         </div>

        <button class="view-proj-btn w-2/6 view-proj-btn:hover text-black text-xl font-bold my-10 py-4 px-12 border-b-4 darker-yellow rounded">
                Check out my other projects!
        </button>

      </div>

    <div id="contact" className="contact-box bg-cover h-screen w-full">

      <div id="contact-container" className="h-full w-full flex justify-center">
      <div id="contact-content" className='h-full w-full flex flex-col justify-center items-center'>
        <div className='w-4/6 h-5/6 flex items-center justify-center flex-col'>
          <div className="aboutMeTitle w-full h-2/6 justify-between flex flex-col mb-4">
            <div className = "flex flex-col justify-center">
              <p className='text-white text-3xl drop-shadow-lg white-stroke'>Wanna see if we can build something amazing together? or perhaps just dropping by to say good day?</p>
            
            </div>
            <div className = "flex flex-col justify-center">
              <p className='yellow-color white-stroke text-center text-5xl font-bold drop-shadow-lg py-10'>Let's have a chat! </p>
            </div>
          </div>
          <div className="aboutMeTitle w-full flex items-center justify-center">
            <div className='flex flex-col justify-center p-4 mt-6'>
                <div className='flex flex-col items-center'>
                <p className='dark-blue-color text-center text-5xl p-2 drop-shadow-lg'> <ImMail4 /></p>
                </div>
                <div>
                <p className='dark-blue-color text-center text-2xl p-2'> Email me at</p>
                </div>
                <div>
                <p className='dark-blue-color text-center text-2xl p-2 '> larios.ericsimon.122@gmail.com</p>
                </div>
            </div>
           
          </div>
        </div>
        <div className='w-full h-1/6 contact justify-center '>
          <div className="aboutMeTitle h-full justify-around items-center flex">
            <div className = "flex flex-col justify-center ">
              <div>
              <p className='text-white text-lg font-bold drop-shadow-lg'>Eric Simon Larios </p>
              </div>

              <div className='flex'>
              <p className='yellow-color text-sm font-bold drop-shadow-lg flex items-center'><FaRegCopyright/> </p>
              <p className='yellow-color text-sm font-bold drop-shadow-lg ml-1'> 2023, built and designed by</p>
              
              </div>

              <div>
              <p className='yellow-color text-sm font-bold drop-shadow-lg'>Eric Simon Larios </p>
              </div>
            </div>

            <div className = "flex flex-col justify-center ">
              <div>
              <p className='text-white text-lg font-bold drop-shadow-lg'>Links </p>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                <p className=' text-md font-bold drop-shadow-lg flex items-center'><a href='#home' className='yellow-color hoverAnchor'>Home</a> 
                </p>
              
                <p className=' text-md font-bold drop-shadow-lg flex items-center'><a href='#projects' className='yellow-color hoverAnchor'>Projects</a> 
                </p>
                
                </div>

                <div className='flex flex-col'>
                <p className=' text-md font-bold drop-shadow-lg mx-4'> <a href='#about' className='yellow-color hoverAnchor'> About</a> </p>
                <p className=' text-md font-bold drop-shadow-lg mx-4'> <a href='#contact' className='yellow-color hoverAnchor'> Contacts</a> </p>
                
                </div>
              </div>

             
            
            </div>

            <div className = "flex flex-col justify-center ">
              <div>
              <p className='text-white text-lg font-bold drop-shadow-lg'>Get in Touch</p>
              </div>

              <div className ="socMed-icons flex flex-row">
              <p className='yellow-color text-white text-4xl py-2 pr-2'><a href="#twitter" className='hoverAnchor'><FaTwitterSquare /></a></p>
              <p className='yellow-color text-white text-4xl p-2'><a href="#twitter" className='hoverAnchor'><FaFacebookSquare/></a> </p>
              <p className='yellow-color text-white text-4xl p-2'><a href="#twitter" className='hoverAnchor'><FaGithub /></a></p>
              <p className='yellow-color text-white text-4xl p-2'><a href="#twitter" className='hoverAnchor'><ImMail4 /></a></p>
              </div>
            </div>
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
