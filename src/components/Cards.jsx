import React, { useRef } from 'react';
import './cards.css'; // CSS moved to external file for clarity

const Cards = ({title, content}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const angle = 135 + rotateX - rotateY;
    card.style.setProperty('--angle', `${angle}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.setProperty('--angle', `135deg`);
  };

  return (
    <div className="card-container">
      <div
        className="card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h5>{title}</h5>
        <p>{content}</p>
        <div className="glow"></div>
      </div>
    </div>
  );
};

export default Cards;
