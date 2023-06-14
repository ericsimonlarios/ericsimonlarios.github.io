import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function App() {
  return (
    <div className="main-container bg-cover w-full">
      <div id="#home" className="flex h-screen w-full flex-row">
        <div id="home-content" className='h-full w-3/5 flex justify-center items-center'>
          <div className='w-3/4'>
            <div><p className='text-white text-5xl font-bold'>Hi, I'm Eric Simon | Software Developer</p></div>
            <div className ="socMed-icons">
            <i class="fa-solid fa-user"></i>
            <i class="fa-regular fa-user"></i>
            <i class="fa-light fa-user"></i>
            </div>
          </div>
        </div>
        <div className='w-2/5 flex justify-center items-center'>
         <div className='img-container-1 w-96 h-96'>
          <img src={require("./assets/sitting-on-a-moon.png")} 
          alt='sitting on a moon'
          className='h-full w-full'
          />
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
