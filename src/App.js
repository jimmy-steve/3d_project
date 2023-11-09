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

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="Features1" element={<Content />} />
              <Route path="who" element={<Who />} />
              <Route path="*" element={<Home />} />
              <Route path="/earth" element={<EarthComponent />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/contact3d" element={<ContactForm3d />} />
          </Routes>
      </div>
  );
}

export default App;
