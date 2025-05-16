// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
// import Header from "./components/Header";
import Hero from "../pages/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center font-mono">
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div>
    </>
  )
}

export default App
