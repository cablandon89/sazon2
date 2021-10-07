import React from 'react'

//Components
import Carousel from '../Components/Carousel';
import CardItem from '../Components/CardItem';

//CSS
import "./HomeStyles.css";

const Home = () => {
  return (
    <div>
      <Carousel/>
      <h2>Productos destacados</h2>
      <div className="card-item-list">
      {Array.from({ length: 10 }).map((_, idx) => (
        <CardItem key={idx} />
      ))}
      </div>
    </div>
  )
}

export default Home;
