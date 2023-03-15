import React from 'react';
import { Header,About, Work,  Skills, Testimonial, Footer, ThankYou } from './container';
import { Navbar } from './components';
import './App.scss';
function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
        <ThankYou/>
    </div>
  )
}

export default App