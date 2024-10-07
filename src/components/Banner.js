import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi I'm Andrew, a `}<span className="wrap">{text}</span></h1>
                    <p>Hey there! I'm Andrew, a passionate web developer with a knack for bringing ideas to life through code. I specialize in creating engaging and dynamic applications using the MERN stack (MongoDB, Express, React, Node.js) and have a keen eye for clean, efficient, and maintainable code. I’m constantly exploring new technologies and pushing my own boundaries to build solutions that not only work but stand out.

When I'm not coding, you can find me diving into fantasy worlds, playing games, or delving into new realms of tech and design. I love collaborating with others and am always up for a good challenge. Whether it’s designing an AI-powered D&D assistant or refining the perfect UI, I’m driven by curiosity and a genuine love for problem-solving.

Feel free to take a look around and reach out if you'd like to connect or work together!</p>
                        <button onClick={() => console.log('button pressed')}>Lets Connect <ArrowRightCircle size={25}/></button> 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;