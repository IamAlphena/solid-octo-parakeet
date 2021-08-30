import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import blox from '../../images/blox.png';

function About() {
    return (
        <>
    <Carousel>
  <Carousel.Item interval={6000}>
    <div 
    className='d-block carimg'>

    </div>

    {/* <img
      className="d-block"
      src={blox}
      alt="First slide"
    /> */}
    <Carousel.Caption>
      <h3>Front End Developer</h3>
      <p>I enjoy taking a new idea and giving it life on screen. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block "
      src={blox}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Proficent With</h3>
      <p>HTML, CSS, Sass, Javascript, React</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={blox}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
       </>
    )
}

export default About;