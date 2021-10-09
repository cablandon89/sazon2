import {Carousel} from 'react-bootstrap';

const Carrusel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/banner.png"
          alt="Banner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/banner3.png"
          alt="Platos"
        />
        <Carousel.Caption>
          <h3>Comida típica colombiana</h3>
          <p>Los mejores platos típicos colombianos, preparados con la mejor sazón</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x250"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Carrusel;