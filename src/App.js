import './App.css';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import  Navbar  from './components/Navbar';
import styled from "styled-components";
import Content from './components/Content';
import Home from './components/Home';
import Who from './components/Who';
import EarthComponent from './components/EarthComponent';
import ContactForm from './components/ContactForm';
import ContactForm3d  from "./components/ContactForm3d";
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="Features1" element={<Content />} />
              <Route path="who" element={<Who />} />
              <Route path="*" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/contact3d" element={<ContactForm3d />} />
          </Routes>
      </div>
  );
}

export default App;
