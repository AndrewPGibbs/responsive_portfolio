import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nextjs from "../assets/nextjs.svg"
import mongodb from "../assets/mongodb.svg"
import express from "../assets/express.svg"
import reactimg from "../assets/reactimg.svg"
import nodejs from "../assets/nodejs.svg"
import python from "../assets/python.svg"
import colorSharp from "../assets/arrow1.svg"


const Skills = () => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here you can view technologies I enjoy using!<br></br> As a MERN stack developer the majority of these are Javascript based.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={nextjs} alt="NextJS" />
                                <h5>NextJS</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="ExpressJS" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={reactimg} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="NodeJS" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
      )
     
}
 
export default Skills;