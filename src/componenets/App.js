// import './App.css';

import NavBar from './NavBar/NavBar';
import About from "./About/About"
import Contact from "./Contact/Contact"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Home from "./Home/Home"
import '../App.scss';
import BackgroundParticles from './BackgroundParticle';
import { Route, Routes } from "react-router-dom"
import Footer from './Footer/Footer';


function App() {
 return (
    <>
      <BackgroundParticles/>
      <NavBar/>
      <div className='App bg-transparent'>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/resume' element={<Resume />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/projects' element={<Projects />} ></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
