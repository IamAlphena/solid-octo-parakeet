import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function About() {
    return (
        <>
    <Carousel>
  <Carousel.Item interval={6000}>
    <img
      className="d-block "
      src="http://placekitten.com/g/1000/150"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Front End Developer</h3>
      <p>I enjoy taking a new idea and giving it life on screen. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block "
      src="http://placekitten.com/g/1000/150"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Proficent With</h3>
      <p>HTML, CSS, Sass, Javascript, React</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://placekitten.com/g/1000/150"
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