import { motion } from 'framer-motion';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Lenis from 'lenis';
import { useEffect } from 'react';
import WorkDetail from './Components/WorkDetail';
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import IntroAnimation from './Components/Intro';
import ProjectDetails from './Components/ProjectDetails';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  useEffect(()=>{
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  },[])
  return (
    <>
    <Navbar/>
    <div className='pt-24 bg-primary'>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/details' element={<ProjectDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/details2' element={<Details/>}/>
      <Route path='/works' element={<WorkDetail/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/intro' element={<IntroAnimation/>}/>
    </Routes>
    </div>
    <Footer/>
    
    </>
  );
}

export default App;
