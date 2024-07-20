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
      <Route path='/details2' element={<Details/>}/>
      <Route path='/details' element={<WorkDetail/>}/>
      <Route path='/intro' element={<IntroAnimation/>}/>
    </Routes>
    </div>
    
    </>
  );
}

export default App;
