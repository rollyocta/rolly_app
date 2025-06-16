import React from 'react'
import './sample.css'; // Assuming you have a CSS file for styling

const Sample = () => {

    const events = [
    { year: '2020', description: 'Started College' },
    { year: '2022', description: 'Internship at XYZ Company' },
    { year: '2024', description: 'Graduated from University' },
    { year: '2025', description: 'Got my First Job' },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{event.year}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sample
