import { useState } from 'react';
import { ThemeContext } from "./ThemeContext";
import Card from "./components/Cards.jsx";
import './App.css';

// components
import Header from './components/Navbar/Header.jsx';
import Sidebar from './components/Navbar/Sidebar.jsx';
import Hero from './components/Pages/Home/Hero.jsx';
import About from './components/Pages/About/About.jsx';
import Skills from './components/Pages/Skills/Skills.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="app">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />

      <Sidebar isOpen={isOpen} closeMenu={closeMenu} />

      <hr />

      <Hero />
      <Skills />
      <About />
      {/* <About /> */}

      {/* Optional content */}
      {/* <div className="card-container">
        <Card title="Card 1" content="This is the first card." />
        <Card title="Card 2" content="This is the second card." />
        <Card title="Card 3" content="This is the third card." />
      </div> */}
    </div>
  );
}

export default App;
