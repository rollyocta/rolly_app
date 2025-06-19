import React, {useState} from 'react'
import {Link, Github, ChevronLeft, ChevronRight} from 'lucide-react'

import './work.css'

// import lazada from '../../../images/lazada.jpg';
// import Todo from '../../../images/todo-sample.png';
// import FrontEnd from '../../../images/front-end-sample.png';
// import moneyTrackExpenses from '../../../images/moneyTrackExpenses.jpg';

import lazada from '../../../image/system/lazada.jpg';
import Todo from '../../../image/system//todo-sample.png';
import moneyTrackExpenses from '../../../image/system/moneyTrackExpenses.jpg';


const Work = () => {

  const [page, setPage] = useState(1);
  
    const content = [
      {
          number: "01",
          title: "Lazada webpage",
          text: "I created this project as a way to apply the knowledge and skills I’ve gained in HTML, CSS, and JavaScript. It also serves as practice in building responsive web designs that work well across different screen sizes and devices. ",
          tools: "HTML, CSS3, Bootstrap JS, ",
          image: lazada,
          link: "https://rollyocta.github.io/Lazada/",
          githubLink: "https://github.com/rollyocta/Lazada"
      },
      {
          number: "02",
          title: "Netflix webpage",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident quae deleniti, quasi molestias mollitia soluta consequatur ",
          tools: "ReactJs, Html, Css, and Bootstrap",
          image: Todo
      },
      {
          number: "03",
          title: "Money Track Expenses",
          text: "This project was built to enhance my skills in PHP and MySQL by creating a structured, maintainable web application. It uses OOP, PDO for secure database interaction, and Bootstrap for a responsive UI. Core features include CRUD operations, user authentication, profile picture upload, and a dynamic dashboard",
          tools: "HTML, CSS3, Bootstrap JS, PHP, MYSQL ",
          image: moneyTrackExpenses
      }
    ];
  
    const handleNext = () => {
      if (page < content.length) {
        setPage(prev => prev + 1);
      }
    };
  
    const handlePrevious = () => {
      if (page > 1) {
        setPage(prev => prev - 1);
      }
    };

  return (
    <section className='work mt-5'>
      
      <div>
        <h1 className="fw-bold text-center">My Work</h1>
      </div>

      <div class="container">
        <div class="row justify-content-md-center">

          <div class="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center mb-5">  
            <div className='work-info'>
              <h1 className='text-stroke'>{content[page - 1].number}</h1>
              <h1>{content[page - 1].title}</h1>
              <p>{content[page - 1].text}</p>
              <span>{content[page - 1].tools}</span>
              <hr/>

              {/* hindi pa nababago */}
              <div className='work-link'>
                <a href={content[page - 1].link} target="_blank" rel="noopener noreferrer" title='Link'>
                <span>
                <Link color="#ffffff" />
                </span>
                </a>
                <a href={content[page - 1].githubLink} target="_blank" rel="noopener noreferrer" title='repositories'>
                <span>
                <Github color="#ffffff"/>
                </span>
                </a>
              </div>
              {/* hindi pa nababago */}

            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6  d-flex justify-content-center flex-column align-items-center mb-5">

            <div className='work-image mb-3'>
              <img src={content[page - 1].image} alt='project' />
            </div>

            <div className='work-button'>
                <button onClick={handlePrevious} disabled={page === 1}>
                <ChevronLeft />
                </button>
                <span style={{ margin: "0 15px" }}>Page {page} of {content.length}</span>
                <button onClick={handleNext} disabled={page === content.length}>
                <ChevronRight />
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Work
