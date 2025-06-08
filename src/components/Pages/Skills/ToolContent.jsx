import React from 'react';
import { color, motion } from 'framer-motion';
import { Code, Server } from 'lucide-react';

import Card from '../../../components/Cards.jsx'

import ReactImage from '../../../image/icon/react.png'

const ToolContent = ({ isFrontend }) => {
  return (
    <motion.div
      key={isFrontend ? 'frontend' : 'backend'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '1rem', borderRadius: '8px', margin: '0 auto' }}
    >
      {isFrontend ? (
        <div>
          
          <div className='d-flex fw-bold mb-5'><span className="toolLogo"> <Code className='code'/> </span>&nbsp;&nbsp;
            <div className='codeLine'>
            </div>&nbsp;&nbsp;&nbsp;
            <h3>Front-end Development</h3>
          </div>

          <ul className='d-flex justify-content-evenly ' style={{ listStyle: 'none', padding: 0 }}>
            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              React.js
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              HTML5
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              CSS3
            </li>
          </ul>

          <ul className='d-flex justify-content-evenly' style={{ listStyle: 'none', padding: 0 }}>
            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              JavaScript
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              Bootstrap
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              Framer <br/> Motion
            </li>
          </ul>

          
        </div>
      ) : (
        <div>
          <div className='d-flex fw-bold mb-4'><span className="toolLogo"> <Code className='code'/> </span>&nbsp;&nbsp;
            <div className='codeLine'>
            </div>&nbsp;&nbsp;&nbsp;
            <h3>Back-end Development</h3>
          </div>

          <ul className='d-flex justify-content-evenly' style={{ listStyle: 'none', padding: 0 }}>
            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              Node.js
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              Express.js
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              MongoDB
            </li>
          </ul>

          <ul className='d-flex justify-content-evenly' style={{ listStyle: 'none', padding: 0 }}>
            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              PHP
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              MySQL
            </li>

            <li className='tool-container'>
              <img src={ReactImage} alt='React js' height={60}/>
              
            </li>
          </ul>

        </div>
      )}
    </motion.div>
  );
};

export default ToolContent;
