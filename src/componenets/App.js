// import './App.css';

import NavBar from './NavBar/NavBar';
import About from "./About/About"
import Contact from "./Contact/Contact"
import Projects from "./Projects/Projects"
import WorkExperience from "./WorkExperience/WorkExperience"
import Home from "./Home/Home"
import '../App.css';
import { Route, Routes } from "react-router-dom"

function App() {
 return (
    <>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/work-experience' element={<WorkExperience />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/projects' element={<Projects />} ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
