import React from 'react'

import CardItem from '../Components/CardItem';

const Carta = () => {
  return (
    <div>
      <h1>Todos nuestros productos</h1>
      <div>

      </div>
      <div className="card-item-list">
        {Array.from({ length: 10 }).map((_, idx) => (
          <CardItem key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Carta;
