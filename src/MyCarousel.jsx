
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
   return (
     <div style={{
       paddingLeft : '5%', 
       paddingTop : '4%', 
       width : '100%',
       marginBottom : '90%',
     }}>
       <Carousel style = {{
           width : '90%',
           minHeight : '50%',


       }}>
           <Carousel.Item style = {{
                  width : '100%',
           }}>
               <img
                   className="d-block w-100"
                   src="./nature3.jpg"
                   alt="First slide"
               />
               <Carousel.Caption>
                   <h5>First slide label</h5>
                   <p>Some representative placeholder content for the first slide.</p>
               </Carousel.Caption>
           </Carousel.Item  >
           <Carousel.Item style = {{
                  width : '100%',
           }}>
               <img
                   className="d-block w-100"
                   src="./moon4.jpg"
                   alt="First slide"
               />
               <Carousel.Caption>
                   <h5>First slide label</h5>
                   <p>Some representative placeholder content for the first slide.</p>
               </Carousel.Caption>
           </Carousel.Item >
           <Carousel.Item style = {{
                  width : '100%',
           }} >
               <img
                   className="d-block w-100"
                   src="./nature2.jpg"
                   alt="First slide"
               />
               <Carousel.Caption>
                   <h5>Third slide label</h5>
                   <p>Some representative placeholder content for the first slide.</p>
               </Carousel.Caption>
           </Carousel.Item >
          
       </Carousel>
       </div>
   );
};

export default MyCarousel;
