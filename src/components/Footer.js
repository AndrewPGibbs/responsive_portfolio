import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import logo from "../assets/logo.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                    <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1} /></a>
                        <a href=""><img src={navIcon2} /></a>
                        <a href=""><img src={navIcon3} /></a>
                    </div>
                    <p>Copyright 2024. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}