import React, { useState } from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from"./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/project";
import ProjectDetails from "./components/Projects/ProjectDetails";

function App() {
  
  const [openModal, setOpenModal] = useState({ state: false, project: null });
 
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects openModal onClick={openModal}setOpenModal={setOpenModal}/>
      <Contact/>
      <Footer/>
      {openModal.state && (
      <ProjectDetails openModal={openModal}setOpenModal={setOpenModal}/>
      )}
      
    </div>
  );


}

export default App;
